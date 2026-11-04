import type { VuetifyOptions } from 'vuetify'

export const staticPrimaryColor = '#696CFF'

const lightColors1 = {
    primary: '#0E7490',
    'on-primary': '#fff',
    brand: '#0E7490',
    'on-brand': '#fff',
    secondary: '#475569',
    'on-secondary': '#fff',
    success: '#15803D',
    'on-success': '#fff',
    info: '#0369A1',
    'on-info': '#fff',
    warning: '#B45309',
    'on-warning': '#fff',
    error: '#DC2626',
    'on-error': '#fff',
    background: '#F5F7FA',
    'on-background': '#1E293B',
    surface: '#FFFFFF',
    'on-surface': '#1E293B',
    'grey-50': '#FAFAFA',
    'grey-100': '#EBEEF0',
    'grey-200': '#EEEEEE',
    'grey-300': '#E0E0E0',
    'grey-400': '#BDBDBD',
    'grey-500': '#9E9E9E',
    'grey-600': '#757575',
    'grey-700': '#616161',
    'grey-800': '#424242',
    'grey-900': '#212121',
    'perfect-scrollbar-thumb': '#DBDADE',
    'skin-bordered-background': '#fff',
    'skin-bordered-surface': '#fff'
}

const theme: VuetifyOptions['theme'] = {
    // Overlays, charts and <body> follow the global theme, so it must start in
    // step with the app store (see views/admin/index.vue) rather than the OS.
    defaultTheme: 'light',
    // V4: use `false` instead of { lighten: 0, darken: 0 } to suppress color variant CSS
    // generation; the object form interacts unexpectedly with V4's new transparency support.
    variations: false,
    themes: {
        light: {
            dark: false,
            colors: lightColors1,

            variables: {
                // Muted text and field labels need this to reach 4.5:1.
                'medium-emphasis-opacity': 0.75,
                'code-color': '#d400ff',
                'overlay-scrim-background': '#32475C',
                'overlay-scrim-opacity': 0.5,
                'border-color': '#334155',
                'snackbar-background': '#1E293B',
                'snackbar-color': '#ffffff',
                'tooltip-background': '#262732',
                'tooltip-opacity': 0.9,
                'table-header-background': '#F8FAFC',

                // Shadows
                'shadow-key-umbra-opacity':
                    'rgba(var(--v-theme-on-surface), 0.06)',
                'shadow-key-penumbra-opacity':
                    'rgba(var(--v-theme-on-surface), 0.04)',
                'shadow-key-ambient-opacity':
                    'rgba(var(--v-theme-on-surface), 0.02)'
            }
        },
        dark: {
            dark: true,
            colors: {
                primary: '#22B8CF',
                'on-primary': '#06262D',
                // The bright primary is too loud for a full-height panel.
                brand: '#155E75',
                'on-brand': '#fff',
                secondary: '#94A3B8',
                'on-secondary': '#0F172A',
                success: '#4ADE80',
                'on-success': '#052E16',
                info: '#38BDF8',
                'on-info': '#082F49',
                warning: '#FBBF24',
                'on-warning': '#451A03',
                error: '#F87171',
                'on-error': '#450A0A',
                background: '#0F172A',
                'on-background': '#E2E8F0',
                surface: '#1E293B',
                'on-surface': '#E2E8F0',
                'grey-50': '#2A2E42',
                'grey-100': '#444463',
                'grey-200': '#4A5072',
                'grey-300': '#5E6692',
                'grey-400': '#7983BB',
                'grey-500': '#8692D0',
                'grey-600': '#AAB3DE',
                'grey-700': '#B6BEE3',
                'grey-800': '#CFD3EC',
                'grey-900': '#E7E9F6',
                'perfect-scrollbar-thumb': '#4A5072',
                'skin-bordered-background': '#2b2c40',
                'skin-bordered-surface': '#2b2c40'
            },
            variables: {
                'code-color': '#d400ff',
                'overlay-scrim-background': '#0D0E24',
                'overlay-scrim-opacity': 0.6,
                'border-color': '#CBD5E1',
                'snackbar-background': '#E2E8F0',
                'snackbar-color': '#1E293B',
                'tooltip-background': '#464A65',
                'tooltip-opacity': 0.9,
                'table-header-background': '#172033',

                // Shadows
                'shadow-key-umbra-opacity': 'rgba(20, 21, 33, 0.06)',
                'shadow-key-penumbra-opacity': 'rgba(20, 21, 33, 0.04)',
                'shadow-key-ambient-opacity': 'rgba(20, 21, 33, 0.02)'
            }
        }
    }
}

export default theme
