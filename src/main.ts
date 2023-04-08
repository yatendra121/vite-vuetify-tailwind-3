import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

//using css import, vite take much time to HMR
//import './assets/css/index.css'

import { registerPlugins } from './plugins'

import router from '@/router'
import components from '@/components'
import directives from '@/directives'

//import { DefaultApolloClient } from '@vue/apollo-composable'
//import { apolloClient } from './plugins/graphql'

//import { partytownSnippet } from '@builder.io/partytown/integration'

//const snippetText = partytownSnippet()

//console.log(snippetText)

const app = createApp({
    setup() {
        //  provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
})

app.use(createPinia())
app.use(router)
app.use(components)
app.use(directives)

registerPlugins(app)

app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
    console.log({ err, vm, info })
}

app.config.warnHandler = function (msg, vm, trace) {
    console.log({ msg, vm, trace })
}
