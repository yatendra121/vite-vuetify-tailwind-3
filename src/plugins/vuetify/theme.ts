import type { VuetifyOptions } from 'vuetify'

export const staticPrimaryColor = '#696CFF'

const lightColors1 = {
    primary: '#36b3cf',
    'on-primary': '#fff',
    secondary: '#509cad',
    'on-secondary': '#fff',
    success: '#71DD37',
    'on-success': '#fff',
    info: '#03C3EC',
    'on-info': '#fff',
    warning: '#FFAB00',
    'on-warning': '#fff',
    error: '#FF3E1D',
    background: '#F5F5F9',
    'on-background': '#32475C',
    'on-surface': '#32475C',
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

const lightColors2 = {
    primary: '#0085db',
    secondary: '#707a82',
    info: '#46caeb',
    success: '#4bd08b',
    warning: '#f8c076',
    error: '#fb977d',
    indigo: '#8763da',
    lightprimary: '#e5f3fb',
    lightinfo: '#e1f5fa',
    lightsecondary: '#e7ecf0',
    lightsuccess: '#dffff3',
    lighterror: '#ffede9',
    lightwarning: '#fff6ea',
    lightindigo: '#f1ebff',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f0f5f9',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    grey100: '#707a82',
    grey200: '#111c2d',
    darkbg: '#2a3447',
    bglight: '#f5f8fb'
}

const theme: VuetifyOptions['theme'] = {
    defaultTheme: 'light',
    variations: {
        colors: [],
        lighten: 0,
        darken: 0
    },
    themes: {
        light: {
            dark: false,
            colors: lightColors1,

            variables: {
                'code-color': '#d400ff',
                'overlay-scrim-background': '#32475C',
                'overlay-scrim-opacity': 0.5,
                'border-color': '#32475C',
                'snackbar-background': '#32475C',
                'snackbar-color': '#ffffff',
                'tooltip-background': '#262732',
                'tooltip-opacity': 0.9,
                'table-header-background': '#F5F5F7',

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
                primary: '#2d90a6',
                'on-primary': '#fff',
                secondary: '#46818f',
                'on-secondary': '#fff',
                success: '#71DD37',
                'on-success': '#fff',
                info: '#03C3EC',
                'on-info': '#fff',
                warning: '#FFAB00',
                'on-warning': '#fff',
                error: '#FF3E1D',
                background: '#232333',
                'on-background': '#DBDBEB',
                surface: '#2B2C40',
                'on-surface': '#DBDBEB',
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
                'border-color': '#DBDBEB',
                'snackbar-background': '#DBDBEB',
                'snackbar-color': '#2B2C40',
                'tooltip-background': '#464A65',
                'tooltip-opacity': 0.9,
                'table-header-background': '#3A3E5B',

                // Shadows
                'shadow-key-umbra-opacity': 'rgba(20, 21, 33, 0.06)',
                'shadow-key-penumbra-opacity': 'rgba(20, 21, 33, 0.04)',
                'shadow-key-ambient-opacity': 'rgba(20, 21, 33, 0.02)'
            }
        }
    }
}

export default theme
