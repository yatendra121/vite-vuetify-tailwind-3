import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify/vuetify'
import { loadFonts } from './plugins/vuetify/webfontloader'
import axios from './plugins/axios'
import router from './router'
import store from './store/core'
import { createPinia } from 'pinia'
import './assets/css/index.css'
import Components from '@/components'
import './plugins'
import TitleLayout from '@/views/admin/TitleLayout.vue'
//import './sass'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(axios)
app.use(store)
app.use(createPinia())
app.use(router)
app.use(Components)

app.component('title-layout', TitleLayout)

app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
    console.log({ err, vm, info })
}

app.config.warnHandler = function (msg, vm, trace) {
    console.log({ msg, vm, trace })
}
