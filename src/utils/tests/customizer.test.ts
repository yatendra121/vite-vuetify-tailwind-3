import { describe, expect, it } from 'vitest'
import {
    buildComponentDefaults,
    cloneDefaults,
    COLOR_PRESETS,
    DEFAULT_SETTINGS,
    foregroundFor,
    sanitizeSettings
} from '@/config/customizer'

describe('sanitizeSettings', () => {
    it('returns defaults for anything that is not settings', () => {
        for (const value of [null, undefined, 'x', 3, []]) {
            expect(sanitizeSettings(value)).toEqual(DEFAULT_SETTINGS)
        }
    })

    it('keeps valid values and replaces only the invalid ones', () => {
        const result = sanitizeSettings({
            mode: 'dark',
            buttonVariant: 'sparkly',
            radius: 99,
            cardBorder: 'yes',
            removedSetting: true
        })
        expect(result.mode).toBe('dark')
        expect(result.buttonVariant).toBe(DEFAULT_SETTINGS.buttonVariant)
        expect(result.radius).toBe(DEFAULT_SETTINGS.radius)
        expect(result.cardBorder).toBe(DEFAULT_SETTINGS.cardBorder)
        expect(result).not.toHaveProperty('removedSetting')
    })

    it('accepts only known colors written as hex', () => {
        const { colors } = sanitizeSettings({
            colors: {
                light: { primary: '#112233', error: 'red', other: '#000000' },
                dark: 4
            }
        })
        expect(colors).toEqual({ light: { primary: '#112233' }, dark: {} })
    })

    it('rejects an unknown preset', () => {
        expect(sanitizeSettings({ preset: 'gone' }).preset).toBe('forest')
    })
})

describe('cloneDefaults', () => {
    it('does not share color overrides between copies', () => {
        cloneDefaults().colors.light.primary = '#000000'
        expect(cloneDefaults().colors.light).toEqual({})
    })
})

describe('foregroundFor', () => {
    it('picks readable text for light and dark backgrounds', () => {
        expect(foregroundFor('#C8F13A')).toBe('#101512')
        expect(foregroundFor('#14633F')).toBe('#FFFFFF')
    })

    it('gives every preset color readable text', () => {
        for (const preset of COLOR_PRESETS) {
            for (const palette of [preset.light, preset.dark]) {
                for (const color of Object.values(palette)) {
                    expect(['#101512', '#FFFFFF']).toContain(
                        foregroundFor(color)
                    )
                }
            }
        }
    })
})

describe('buildComponentDefaults', () => {
    const build = (changes: object) =>
        buildComponentDefaults({ ...cloneDefaults(), ...changes }) as Record<
            string,
            Record<string, unknown>
        >

    it('keeps the existing design at the default settings', () => {
        const defaults = build({})
        expect(defaults.VBtn).toMatchObject({
            variant: 'flat',
            elevation: 0,
            rounded: 'pill'
        })
        expect(defaults.VCard).toMatchObject({
            variant: 'elevated',
            elevation: 1,
            border: true,
            rounded: 'xl'
        })
        expect(defaults.VTextField).toMatchObject({
            variant: 'outlined',
            density: 'comfortable',
            rounded: 'lg'
        })
    })

    it('lets selects follow text fields or choose their own variant', () => {
        expect(build({ fieldVariant: 'filled' }).VAutocomplete.variant).toBe(
            'filled'
        )
        expect(
            build({ fieldVariant: 'filled', selectVariant: 'underlined' })
                .VSelect.variant
        ).toBe('underlined')
    })

    it('only elevates buttons and cards using the elevated variant', () => {
        expect(build({ buttonVariant: 'elevated' }).VBtn.elevation).toBe(2)
        expect(
            build({ cardVariant: 'outlined', elevation: 4 }).VCard.elevation
        ).toBe(0)
        expect(build({ elevation: 4 }).VCard.elevation).toBe(4)
    })

    it('squares corners at radius 0', () => {
        const defaults = build({ radius: 0 })
        for (const name of ['VBtn', 'VCard', 'VTextField', 'VAlert']) {
            expect(defaults[name].rounded).toBe(0)
        }
    })
})
