import type { VuetifyOptions } from 'vuetify'

const fieldDefaults = {
    variant: 'outlined',
    density: 'comfortable',
    color: 'primary',
    rounded: 'lg',
    clearable: true
}

const config: VuetifyOptions['defaults'] = {
    VBtn: {
        rounded: 'pill',
        elevation: 0,
        class: 'text-none'
    },
    VCard: {
        elevation: 1,
        border: true,
        rounded: 'xl'
    },
    VChip: {
        rounded: 'pill'
    },
    VListItem: {
        rounded: 'lg'
    },
    VMenu: {
        transition: 'slide-y-transition'
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
        maxWidth: 440
    },
    VDataTableServer: {
        hover: true
    }
}

export default config
