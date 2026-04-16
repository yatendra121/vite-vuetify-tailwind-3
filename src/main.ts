import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { registerPlugins } from './plugins'
import router from '@/router'
import components from '@/components'
import directives from '@/directives'

// Styles
import '@/styles/_variables.scss'

const app = createApp({
    render: () => h(App)
})

app.config.errorHandler = (err, _vm, info) => {
    console.error('[App Error]', info, err)
}

app.use(createPinia())
app.use(router)
app.use(components)
app.use(directives)

registerPlugins(app)

app.mount('#app')
