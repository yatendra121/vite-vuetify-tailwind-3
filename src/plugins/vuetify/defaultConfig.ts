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
    // An icon inside the field keeps it aligned with the fields around it.
    VFileInput: {
        ...fieldDefaults,
        clearable: false,
        prependIcon: '',
        prependInnerIcon: '$file'
    },
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
