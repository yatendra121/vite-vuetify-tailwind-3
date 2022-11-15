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
    VTooltip: {
        transition: 'scroll-y-reverse-transition',
        location: 'top'
    }
}

export default config
