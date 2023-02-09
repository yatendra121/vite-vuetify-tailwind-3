import type { ThemeDefinition } from 'vuetify'

const themes: { light: ThemeDefinition; dark: ThemeDefinition } = {
    light: {
        dark: false,
        colors: {
            background: '#F4F4F4',
            surface: '#FFFFFF',
            'surface-variant': '#424242',
            'on-surface-variant': '#EEEEEE',
            primary: '#2e8c6e',
            'primary-darken-1': '#25735a',
            secondary: '#219da3',
            'secondary-darken-1': '#277541',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00'
        },
        variables: {
            'border-color': '#000000',
            'border-opacity': 0.12,
            'high-emphasis-opacity': 0.87,
            'medium-emphasis-opacity': 0.6,
            'disabled-opacity': 0.38,
            'idle-opacity': 0.04,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.12,
            'dragged-opacity': 0.08,
            'kbd-background-color': '#212529',
            'kbd-color': '#FFFFFF',
            'code-background-color': '#C2C2C2'
        }
    },
    dark: {
        dark: true,
        colors: {
            background: '#121212',
            surface: '#212121',
            'surface-variant': '#BDBDBD',
            'on-surface-variant': '#424242',
            primary: '#0a8265',
            'primary-darken-1': '#09614c',
            secondary: '#147378',
            'secondary-darken-1': '#0d5559',
            error: '#CF6679',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00'
        },
        variables: {
            'border-color': '#FFFFFF',
            'border-opacity': 0.12,
            'high-emphasis-opacity': 0.87,
            'medium-emphasis-opacity': 0.6,
            'disabled-opacity': 0.38,
            'idle-opacity': 0.1,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.16,
            'dragged-opacity': 0.08,
            'kbd-background-color': '#212529',
            'kbd-color': '#FFFFFF',
            'code-background-color': '#B7B7B7'
        }
    }
}

export default themes
// 'on-background': string;
// 'on-surface': string;
// 'on-primary': string;
// 'on-secondary': string;
// 'on-success': string;
// 'on-warning': string;
// 'on-error': string;
// 'on-info': string;
