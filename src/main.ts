import { createApp, provide, h } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/vuetify/webfontloader'
import router from './router'
import storeCore from './store/core'
import { createPinia } from 'pinia'
import './assets/css/index.css'
import components from '@/components'
import directives from '@/directives'
import './plugins'
import TitleLayout from '@/views/admin/TitleLayout.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './plugins/graphql'
//import vqVuetify from 'vq-vuetify'

//import { partytownSnippet } from '@builder.io/partytown/integration'

//const snippetText = partytownSnippet()

//console.log(snippetText)

loadFonts()

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
})
app.use(vuetify)
//app.use(vqVuetify)
app.use(storeCore)
app.use(createPinia())
app.use(router)
app.use(components)
app.use(directives)

app.component('TitleLayout', TitleLayout)

app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
    console.log({ err, vm, info })
}

app.config.warnHandler = function (msg, vm, trace) {
    console.log({ msg, vm, trace })
}
