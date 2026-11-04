<template>
  <v-app id="inspire" :theme="theme">
    <v-defaults-provider :defaults="customizerDefaults">
    <admin-app>
      <router-view :key="$route.path" v-slot="{ Component, route }">
        <v-fade-transition mode="out-in" appear>
          <div>
            <suspense v-if="Component">
              <template #default>
                <component :is="Component" :key="route.name" />
              </template>
              <template #fallback>
                <FallbackComponent />
              </template>
            </suspense>
          </div>
        </v-fade-transition>
      </router-view>
    </admin-app>
    </v-defaults-provider>
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
import { useTheme } from 'vuetify'
import { useRouter, useRoute } from 'vue-router'
import type { RouteMeta } from 'vue-router'
import { useAppStore } from '@/store/reactivity/app'
import AdminApp from './adminApp.vue'
import FallbackComponent from '@/components/Loading/FallbackComponent'
import type { AuthStatus } from '@/types/auth'
import { useProfileStore } from '@/store/reactivity/profile'
import { APP_NAME } from '@/config/brand'
import { useApplyCustomizer } from '@/composables/customizer'
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

    // Charts and overlays read the global theme, not the one on <v-app>.
    const vuetifyTheme = useTheme()
    watch(theme, (value) => vuetifyTheme.change(value), { immediate: true })
    const customizerDefaults = useApplyCustomizer()

    // Navigation redirection
    const route = useRoute()
    const router = useRouter()
    const { authStatus } = toRefs(props)

    // `useRoute()` in this App-level component can still hold the
    // pre-resolution START_LOCATION ('/', empty meta) at the moment our
    // watcher first fires, because the router's initial navigation runs
    // in parallel with App.vue's `myProfile()` call. To make a reliable
    // decision we (a) wait for `router.isReady()` so the route object is
    // fully populated and (b) double-check the live URL via
    // `window.location.pathname` for public auth pages.
    const PUBLIC_AUTH_PATH = /\/(auth|forgot-password|reset-password)(\/|$)/

    const isOnPublicAuthPath = () => {
      if (route.meta?.isPublic === true) return true
      if (typeof window === 'undefined') return false
      return PUBLIC_AUTH_PATH.test(window.location.pathname)
    }

    const redirectToAuth = async () => {
      await router.isReady()
      if (route.meta.type === 'not_found') return
      if (props.authStatus === 'authenticated') {
        if (isOnPublicAuthPath()) router.push({ name: 'dashboard' })
      } else if (props.authStatus === 'unauthenticated') {
        if (!isOnPublicAuthPath()) router.push({ name: 'login' })
      }
      // Intentionally do nothing while authStatus === 'pending'.
    }

    watch(authStatus, () => redirectToAuth(), { immediate: true })

    // Navigation Guard
    const profileStore = useProfileStore()

    const title = useTitle()

    router.beforeEach((to) => {
      if (!profileStore.authProfile && !to.meta.isPublic) {
        return { name: 'login' }
      }
    })

    // Browser tab title is updated in `afterEach` because `beforeEach` is
    // skipped on the initial navigation (this guard is registered AFTER
    // the router has started resolving the first route). `afterEach`
    // *does* run for the initial navigation once it settles.
    const applyTitle = (to: { meta: RouteMeta }) => {
      if (to.meta.title) title.value = `${to.meta.title} · ${APP_NAME}`
    }
    router.afterEach((to) => applyTitle(to))
    // Cover the initial nav explicitly in case it had already settled
    // before this component mounted.
    router.isReady().then(() => applyTitle(route))

    // Close loader if exist
    onMounted(() => {
      setTimeout(() => {
        const appLoading = document.querySelector('#initial_startup')
        if (appLoading) appLoading.remove()
      }, 100)
    })

    return { theme, customizerDefaults }
  }
})
</script>
