import { createApp, provide, h } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/vuetify/webfontloader'
import router from './router'
import storeCore from './store/core'
import { createPinia } from 'pinia'
import './assets/css/index.css'
import Components from '@/components'
import './plugins'
import TitleLayout from '@/views/admin/TitleLayout.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './plugins/graphql'
// //import './sass'

loadFonts()

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
})
app.use(vuetify)
app.use(storeCore)
app.use(createPinia())
app.use(router)
app.use(Components)

app.component('TitleLayout', TitleLayout)

app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
    console.log({ err, vm, info })
}

app.config.warnHandler = function (msg, vm, trace) {
    console.log({ msg, vm, trace })
}
