import { computed, watchEffect } from 'vue'
import { useTheme } from 'vuetify'
import {
    buildComponentDefaults,
    COLOR_PRESETS,
    foregroundFor,
    type ThemeName
} from '@/config/customizer'
import { useCustomizerStore } from '@/store/reactivity/customizer'

/**
 * Applies the customizer settings to the running app: colors and the heading
 * font through Vuetify's theme, component looks through the returned defaults.
 * Call once, from the root view.
 */
export function useApplyCustomizer() {
    const store = useCustomizerStore()
    const theme = useTheme()

    // Read once, so that clearing a custom color restores the theme's own value.
    const baseColors = (['light', 'dark'] as ThemeName[]).reduce(
        (colors, name) => {
            colors[name] = { ...theme.themes.value[name].colors } as Record<
                string,
                string
            >
            return colors
        },
        {} as Record<ThemeName, Record<string, string>>
    )

    watchEffect(() => {
        const preset =
            COLOR_PRESETS.find(({ id }) => id === store.settings.preset) ??
            COLOR_PRESETS[0]

        for (const name of ['light', 'dark'] as ThemeName[]) {
            const changed = { ...preset[name], ...store.settings.colors[name] }
            const colors: Record<string, string> = {
                ...baseColors[name],
                ...changed
            }
            for (const [key, color] of Object.entries(changed)) {
                colors[`on-${key}`] = foregroundFor(color)
            }
            Object.assign(theme.themes.value[name].colors, colors)
            theme.themes.value[name].variables['font-heading'] =
                `'${store.settings.headingFont}', 'DM Sans', sans-serif`
        }
    })

    // Vuetify's type scale is in rem, so this resizes all text together.
    watchEffect(() => {
        document.documentElement.style.fontSize = `${store.settings.fontSize}px`
    })

    return computed(() => buildComponentDefaults(store.settings))
}
