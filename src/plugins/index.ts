import vuetify from './vuetify'
import vqVuetify from './vqVuetify'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
    app.use(vuetify)
    app.use(vqVuetify)
}
