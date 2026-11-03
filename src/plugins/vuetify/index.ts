// Vuetify
import { createVuetify, IconOptions } from 'vuetify'
// V4: removed wildcard `import * as components / directives` — conflicts with
// vite-plugin-vuetify autoImport: true which is already configured in vite.config.ts.
// Components are tree-shaken and auto-imported by the plugin.
import themes from './theme'
import defaultConfig from './defaultConfig'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { md3 } from 'vuetify/blueprints'

const icons: IconOptions = {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi
    }
}

export default createVuetify({
    blueprint: md3,
    icons,
    // Default is 'lg' (1145px), which turned 1024px laptops into "mobile".
    display: { mobileBreakpoint: 'md' },
    defaults: defaultConfig,
    theme: themes
})
