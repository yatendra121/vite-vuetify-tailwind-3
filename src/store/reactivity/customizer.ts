import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { usePreferredDark, watchDebounced } from '@vueuse/core'
import {
    cloneDefaults,
    sanitizeSettings,
    type CustomizerSettings,
    type ThemeColor,
    type ThemeName
} from '@/config/customizer'

const STORAGE_KEY = 'app_customizer'
// The theme toggle saved its choice here before the customizer existed.
const LEGACY_THEME_KEY = 'app_theme'
const STORAGE_VERSION = 1

const loadSettings = (): CustomizerSettings => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return sanitizeSettings(JSON.parse(stored)?.settings)
        return sanitizeSettings({
            mode: localStorage.getItem(LEGACY_THEME_KEY)
        })
    } catch {
        // Blocked storage or broken JSON: start from the defaults.
        return cloneDefaults()
    }
}

const saveSettings = (settings: CustomizerSettings) => {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ version: STORAGE_VERSION, settings })
        )
    } catch {
        // Storage can be blocked; the choices then last for this visit.
    }
}

export const useCustomizerStore = defineStore('customizer', () => {
    const settings = ref(loadSettings())
    const panelOpen = ref(false)
    const prefersDark = usePreferredDark()

    const resolvedTheme = computed<ThemeName>(() => {
        if (settings.value.mode === 'system') {
            return prefersDark.value ? 'dark' : 'light'
        }
        return settings.value.mode
    })

    // Dragging the color picker changes settings many times a second.
    watchDebounced(settings, saveSettings, { deep: true, debounce: 200 })

    const update = <K extends keyof CustomizerSettings>(
        key: K,
        value: CustomizerSettings[K]
    ) => {
        settings.value[key] = value
    }

    /** Custom colors apply to the theme on screen, since each needs its own. */
    const setColor = (name: ThemeColor, color: string) => {
        settings.value.colors[resolvedTheme.value][name] = color.slice(0, 7)
    }

    const applyPreset = (id: string) => {
        settings.value.preset = id
        settings.value.colors = { light: {}, dark: {} }
    }

    const reset = () => {
        settings.value = cloneDefaults()
    }

    return {
        settings,
        panelOpen,
        resolvedTheme,
        update,
        setColor,
        applyPreset,
        reset
    }
})
