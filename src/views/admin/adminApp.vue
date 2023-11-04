<template>
  <MessageQueue />
  <ConfirmAndAction />
  <component :is="currentView"><slot /> </component>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  defineAsyncComponent,
  ref,
  onMounted
} from 'vue'
import { useRoute, useRouter } from 'vue-router'

const ConfirmAndAction = defineAsyncComponent(
  () =>
    import(
      /* webpackChunkName: "vq-vuetify-basic" */ '@/components/Basic/Dialog/ConfirmAndAction'
    )
)
const MessageQueue = defineAsyncComponent(
  () =>
    import(
      /* webpackChunkName: "vq-vuetify-basic" */ '@/components/Basic/MessageQueue.vue'
    )
)
const AdminView = defineAsyncComponent(
  () =>
    import(
      /* webpackChunkName: "admin-layout" */ '@/layouts/Admin/ParentView.vue'
    )
)
const AuthView = defineAsyncComponent(
  () =>
    import(
      /* webpackChunkName: "auth-layout" */ '@/layouts/Auth/ParentView.vue'
    )
)
const NotFoundView = defineAsyncComponent(
  () =>
    import(
      /* webpackChunkName: "not-found-layout" */ '@/layouts/NotFound/ParentView.vue'
    )
)
const DefaultView = defineAsyncComponent(
  () =>
    import(
      /* webpackChunkName: "default-layout" */ '@/layouts/NotFound/ParentView.vue'
    )
)

export default defineComponent({
  components: {
    AdminView,
    AuthView,
    NotFoundView,
    DefaultView,
    MessageQueue,
    ConfirmAndAction
  },
  setup() {
    const ParentView = ref('DefaultView')

    const route = useRoute()
    const router = useRouter()

    const changeLayoutView = (type: unknown) => {
      if (type === 'auth') ParentView.value = 'AuthView'
      else if (type === 'not_found') ParentView.value = 'NotFoundView'
      else if (type === 'admin') ParentView.value = 'AdminView'
      else ParentView.value = 'DefaultView'
    }
    router.beforeResolve((to, from, next) => {
      changeLayoutView(to.meta?.type)
      next()
    })

    onMounted(() => {
      changeLayoutView(route.meta?.type)
    })

    const currentView = computed(() => ParentView.value)

    return { currentView, ParentView }
  }
})
</script>
