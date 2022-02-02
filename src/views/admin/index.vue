<template>
  <v-app id="inspire" :theme="theme">
    <admin-app>
      <router-view v-show="!authLoading" :key="$route" v-slot="{ Component }">
        <!-- <v-scroll-y-transition mode="out-in">
          <keep-alive> -->
        <suspense>
          <template #default>
            <component :is="Component" />
          </template>
          <template #fallback> Loading... </template>
        </suspense>
        <!-- </keep-alive>
        </v-scroll-y-transition> -->
      </router-view>
    </admin-app>
  </v-app>
</template>
<script lang="ts">
import { defineComponent, watch, PropType, computed, onMounted } from 'vue'
import { useTitle } from '@vueuse/core'
import { useStore } from 'vuex'
import { AuthStatus } from '@/types/auth'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/store/reactivity/app'
import AdminApp from './adminApp.vue'
export default defineComponent({
  components: {
    AdminApp
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

    const redirectToAuth = () => {
      if (route.meta.type === 'not_found') {
        console.log('Not Found')
      } else if (props.authStatus === 'authenticated') {
        console.log(route.meta.type)
        router.push({ name: 'dashboard' })
      } else {
        router.push({ name: 'login' })
      }
    }

    watch(props, () => {
      redirectToAuth()
    })
    redirectToAuth()

    // Navigation Guard
    const store = useStore()
    const title = useTitle()
    router.beforeEach((to, from, next) => {
      if (!props.authLoading) {
        if (store.getters.authProfile && to.meta.isPublic) return
        if (!store.getters.authProfile && !to.meta.isPublic) return
      }
      next()

      // Browser Tab Title
      // @ts-ignore
      title.value = to.meta.title
    })

    // Close loader if exist
    onMounted(() => {
      setTimeout(() => {
        const appLoading = document.querySelector('#initial_startup')
        if (appLoading) appLoading.remove()
      }, 300)
    })

    return { theme }
  }
})
</script>
