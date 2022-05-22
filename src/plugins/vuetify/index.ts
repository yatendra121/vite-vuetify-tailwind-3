// Styles
//import 'vuetify/lib/styles/main.sass'
//import 'vuetify/styles'
import 'vuetify/dist/vuetify.css'
//import '@/styles/_variables.scss'
// Vuetify

import { createVuetify, IconOptions } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import colors from 'vuetify/lib/util/colors'
import themes from './theme'
import defaultConfig from './defaultConfig'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

const defaultThemeOptions = {
    defaultTheme: 'light',
    variations: {
        colors: [],
        lighten: 0,
        darken: 0
    },
    themes: themes
}

const icons: IconOptions = {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi
    }
}

export default createVuetify({
    icons: icons,
    components,
    directives,
    defaults: defaultConfig,
    theme: defaultThemeOptions
})
