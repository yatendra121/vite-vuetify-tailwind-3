import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { registerPlugins } from './plugins'
import router from '@/router'
import components from '@/components'
import directives from '@/directives'

// Styles
import '@/styles/_variables.scss'
import '@/styles/index.scss'

const app = createApp({
    render: () => h(App)
})

app.config.errorHandler = (err, _vm, info) => {
    console.error('[App Error]', info, err)
}

// A deploy replaces the hashed files an open tab still asks for. Reload to get
// the new ones, but not repeatedly if the files really are unavailable.
window.addEventListener('vite:preloadError', (event) => {
    const key = 'app_chunk_reload'
    try {
        if (Date.now() - Number(sessionStorage.getItem(key)) < 10_000) return
        sessionStorage.setItem(key, String(Date.now()))
    } catch {
        return
    }
    event.preventDefault()
    window.location.reload()
})

app.use(createPinia())
app.use(router)
app.use(components)
app.use(directives)

registerPlugins(app)

app.mount('#app')
