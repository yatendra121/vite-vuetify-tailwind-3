import type { VuetifyOptions } from 'vuetify'

const fieldDefaults = {
    variant: 'outlined',
    density: 'comfortable',
    color: 'primary',
    clearable: true
}

const config: VuetifyOptions['defaults'] = {
    VBtn: {
        rounded: 'lg',
        elevation: 0,
        class: 'text-none'
    },
    VCard: {
        flat: true,
        border: true,
        rounded: 'lg'
    },
    VSheet: {
        color: ''
    },
    VTextField: fieldDefaults,
    VTextarea: { ...fieldDefaults, rows: 3 },
    VAutocomplete: fieldDefaults,
    VFileInput: { ...fieldDefaults, clearable: false },
    VTooltip: {
        transition: 'scroll-y-reverse-transition',
        location: 'top'
    },
    VDialog: {
        maxWidth: 480
    },
    VDataTableServer: {
        hover: true
    }
}

export default config
