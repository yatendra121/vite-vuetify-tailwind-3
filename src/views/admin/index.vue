<template>
  <v-app id="inspire" :theme="theme">
    <admin-app>
      <router-view :key="$route.path" v-slot="{ Component, route }">
        <v-fade-transition mode="out-in" appear>
          <v-responsive>
            <!-- v-if="!authLoading" -->
            <suspense>
              <template #default>
                <component :is="Component" :key="route.name" />
              </template>
              <template #fallback>
                <FallbackComponent />
              </template>
            </suspense>
          </v-responsive>
        </v-fade-transition>
      </router-view>
    </admin-app>
  </v-app>
</template>
<script lang="ts">
import {
  defineComponent,
  toRefs,
  watch,
  PropType,
  computed,
  onMounted
} from 'vue'
import { useTitle } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/store/reactivity/app'
import AdminApp from './adminApp.vue'
import FallbackComponent from '@/components/Loading/FallbackComponent'
import type { AuthStatus } from '@/types/auth'
import { useProfileStore } from '@/store/reactivity/profile'
export default defineComponent({
  components: {
    AdminApp,
    FallbackComponent
  },
  props: {
    authLoading: {
      type: Boolean,
      default: () => true,
      required: true
    },
    authStatus: {
      type: String as PropType<AuthStatus>,
      default: () => 'pending',
      required: true
    }
  },
  setup(props) {
    // Current theme light/dark
    const appStore = useAppStore()
    const theme = computed(() => appStore.themeValue)

    // Navigation redirection
    const route = useRoute()
    const router = useRouter()
    const { authStatus } = toRefs(props)

    const redirectToAuth = () => {
      if (route.meta.type === 'not_found') {
        console.log('Not Found')
      } else if (props.authStatus === 'authenticated') {
        if (route.meta.isPublic) router.push({ name: 'dashboard' })
      } else {
        router.push({ name: 'login' })
      }
    }

    watch(authStatus, () => {
      redirectToAuth()
    })
    if (authStatus.value === 'authenticated') redirectToAuth()

    // Navigation Guard
    const profileStore = useProfileStore()

    const title = useTitle()

    router.beforeEach((to, from, next) => {
      if (!profileStore.authProfile) {
        if (profileStore.authProfile && to.meta.isPublic) return
        if (!profileStore.authProfile && !to.meta.isPublic) return
      }
      next()

      // Browser Tab Title
      // setTimeout(() => {
      //   // @ts-ignore
      //   title.value = to.meta.title
      // }, 300)
    })

    // Close loader if exist
    onMounted(() => {
      setTimeout(() => {
        const appLoading = document.querySelector('#initial_startup')
        if (appLoading) appLoading.remove()
      }, 100)
    })

    return { theme }
  }
})
</script>
