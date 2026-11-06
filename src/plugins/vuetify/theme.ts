import type { VuetifyOptions } from 'vuetify'

// Brand colors shared by both themes: ink for navigation and hero surfaces,
// accent for the highlights that sit on them.
const brandColors = {
    ink: '#101512',
    'on-ink': '#F3F6EC',
    accent: '#C8F13A',
    'on-accent': '#171C0B'
}

const headingFont = "'Sora', 'DM Sans', sans-serif"

const lightColors1 = {
    ...brandColors,
    primary: '#14633F',
    'on-primary': '#fff',
    secondary: '#4B5563',
    'on-secondary': '#fff',
    success: '#15803D',
    'on-success': '#fff',
    info: '#1D4ED8',
    'on-info': '#fff',
    warning: '#B45309',
    'on-warning': '#fff',
    error: '#C62828',
    'on-error': '#fff',
    background: '#F5F6F1',
    'on-background': '#171A17',
    surface: '#FFFFFF',
    'on-surface': '#171A17',
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
                'font-heading': headingFont,
                'code-color': '#d400ff',
                'overlay-scrim-background': '#101512',
                'overlay-scrim-opacity': 0.5,
                'border-color': '#171A17',
                'snackbar-background': '#171A17',
                'snackbar-color': '#ffffff',
                'tooltip-background': '#171A17',
                'tooltip-opacity': 0.9,
                'table-header-background': '#F7F8F3',

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
                ...brandColors,
                primary: '#C8F13A',
                'on-primary': '#171C0B',
                secondary: '#A3AC9F',
                'on-secondary': '#101512',
                success: '#4ADE80',
                'on-success': '#052E16',
                info: '#60A5FA',
                'on-info': '#082F49',
                warning: '#FBBF24',
                'on-warning': '#451A03',
                error: '#F87171',
                'on-error': '#450A0A',
                background: '#0C0F0D',
                'on-background': '#E9ECE4',
                surface: '#161A17',
                'on-surface': '#E9ECE4',
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
                'font-heading': headingFont,
                'code-color': '#d400ff',
                'overlay-scrim-background': '#050706',
                'overlay-scrim-opacity': 0.6,
                'border-color': '#E9ECE4',
                'snackbar-background': '#E9ECE4',
                'snackbar-color': '#171A17',
                'tooltip-background': '#2A302B',
                'tooltip-opacity': 0.9,
                'table-header-background': '#1C211D',

                // Shadows
                'shadow-key-umbra-opacity': 'rgba(20, 21, 33, 0.06)',
                'shadow-key-penumbra-opacity': 'rgba(20, 21, 33, 0.04)',
                'shadow-key-ambient-opacity': 'rgba(20, 21, 33, 0.02)'
            }
        }
    }
}

export default theme
