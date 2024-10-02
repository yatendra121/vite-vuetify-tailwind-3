import './socket'
import './trpc'

import vuetify from './vuetify'
import vqVuetify from './vqVuetify'
import { loadFonts } from './vuetify/webfontloader'
//import PerfectScrollbar from 'vue3-perfect-scrollbar'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
    loadFonts()
    app.use(vuetify)
    app.use(vqVuetify.vqVuetify)
    app.use(vqVuetify.VqVuetifyIntegrations)
    //app.use(PerfectScrollbar)
}
