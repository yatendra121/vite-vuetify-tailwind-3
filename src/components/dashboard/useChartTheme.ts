import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@/utils/core'

/** Colors and base options every dashboard chart shares. */
export function useChartTheme() {
    const theme = useTheme()

    return computed(() => {
        const { colors, variables, dark } = theme.current.value
        const onSurface = hexToRgb(String(colors['on-surface']))
        const label = `rgba(${onSurface},${variables['medium-emphasis-opacity']})`

        return {
            label,
            text: String(colors['on-surface']),
            primary: String(colors.primary),
            secondary: String(colors.secondary),
            // In the dark theme accent can match primary, so use a contrasting series.
            accent: String(dark ? colors.secondary : colors.accent),
            grid: `rgba(${onSurface},0.08)`,
            surface: String(colors.surface),
            base: {
                chart: {
                    fontFamily: 'DM Sans, sans-serif',
                    parentHeightOffset: 0,
                    toolbar: { show: false }
                },
                tooltip: {
                    theme: dark ? ('dark' as const) : ('light' as const)
                },
                states: {
                    hover: { filter: { type: 'none' as const } },
                    active: { filter: { type: 'none' as const } }
                }
            }
        }
    })
}
