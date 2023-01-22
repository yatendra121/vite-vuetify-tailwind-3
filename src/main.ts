import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/vuetify/webfontloader'
import router from './router'
import storeCore from './store/core'

//using css import, vite take much time to HMR
//import './assets/css/index.css'
import './plugins'

import components from '@/components'
import directives from '@/directives'

import TitleLayout from '@/views/admin/TitleLayout.vue'
import TitleRow from '@/views/admin/TitleRow.vue'
import TitleButton from '@/views/admin/TitleButton.vue'

//import { DefaultApolloClient } from '@vue/apollo-composable'
//import { apolloClient } from './plugins/graphql'
import vqVuetify from '@/plugins/vqVuetify'

//import { partytownSnippet } from '@builder.io/partytown/integration'

//const snippetText = partytownSnippet()

//console.log(snippetText)

loadFonts()

const app = createApp({
    setup() {
        //  provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
})

app.use(storeCore)
app.use(createPinia())
app.use(vuetify)
app.use(vqVuetify.vqVuetify)
app.use(vqVuetify.VqVuetifyIntegrations)
app.use(router)
app.use(components)
app.use(directives)

app.component('TitleLayout', TitleLayout)
app.component('TitleRow', TitleRow)
app.component('TitleButton', TitleButton)

app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
    console.log({ err, vm, info })
}

app.config.warnHandler = function (msg, vm, trace) {
    console.log({ msg, vm, trace })
}
