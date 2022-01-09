// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
//import 'vuetify/styles'
//import 'vuetify/dist/vuetify.css'
import '@/styles/_variables.scss'
// Vuetify

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import colors from 'vuetify/lib/util/colors'
import themes from './theme'
import defaultConfig from './defaultConfig'

const defaultThemeOptions = {
    defaultTheme: 'light',
    variations: {
        colors: [],
        lighten: 0,
        darken: 0
    },
    themes: themes
}

export default createVuetify({
    components,
    directives,
    defaults: defaultConfig,
    theme: defaultThemeOptions
})
