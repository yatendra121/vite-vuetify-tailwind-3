import type { VuetifyOptions } from 'vuetify/lib/framework.mjs'

const config: VuetifyOptions['defaults'] = {
    VBtn: {},
    VCard: {
        elevation: 2
    },
    VSheet: {
        color: ''
    },
    VTextField: {
        //density: 'compact',
        ///variant: 'outlined',
        color: 'primary',
        clearable: true
    },
    VTextarea: {
        //density: 'compact',
        ///variant: 'outlined',
        color: 'primary',
        clearable: true
    },
    VAutocomplete: {
        //density: 'compact',
        ///variant: 'outlined',
        color: 'primary',
        clearable: true
    },
    VTooltip: {
        transition: 'scroll-y-reverse-transition',
        location: 'top'
    },
    VDataTableServer: {
        hover: true
        // itemsPerPage: 100,
        // loadingText: 'fsdfsdfdsffsfds',
        // noDataText: 'dssssssssssssssssssssss',
    }
}

export default config
