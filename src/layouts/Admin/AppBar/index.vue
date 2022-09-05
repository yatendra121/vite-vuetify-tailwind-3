<template>
  <v-app-bar
    height="62"
    app
    :border="true"
    :elevation="1"
    :rounded="false"
    :collapse="false"
    flat
    floating
    class="main-app-bar"
  >
    <v-app-bar-nav-icon @click="appStore.changeSidebar"></v-app-bar-nav-icon>

    <v-app-bar-title> Vue Application (Vue 3)</v-app-bar-title>

    <template #append>
      <v-menu :close-on-click="true" bottom transition="scroll-y-transition">
        <template #activator="{ props }">
          <v-btn flat variant="text" v-bind="props">
            <p class="tw-normal-case text-subtitle-1">
              {{ authProfile?.name }}
            </p>
            <v-icon size="24px" :icon="mdiChevronDown"> </v-icon>
          </v-btn>
        </template>
        <v-card class="mx-auto" variant="text" :border="50" :elevation="20">
          <!-- :to="{ name: 'my-profile' }" -->
          <v-list class="tw-pt-[2px] tw-pb-[2px]">
            <v-list-item
              link
              @click="myProfileRoute"
              prepend-avatar="defaultProfileImage"
            >
              <!-- <v-list-item-avatar :icon="mdiAccount">
                <v-avatar
              /></v-list-item-avatar> -->
              <template #title>
                <div v-html="authProfile?.name"></div>
              </template>
              <template #subtitle>
                <div v-html="authProfile?.role?.title"></div>
              </template>
            </v-list-item>
            <v-divider />
            <v-list-item
              link
              @click="logOutUser"
              :prepend-avatar="mdiLockOutline"
            >
              <v-list-item-avatar>
                <v-avatar :icon="mdiLockOutline"
              /></v-list-item-avatar>
              <v-list-item-title> Logout </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn
        :icon="theme === 'dark' ? mdiWeatherSunny : mdiWeatherNight"
        @click="appStore.changeTheme()"
      ></v-btn>
      <v-btn :icon="mdiFullscreen" @click="() => fullscreen"></v-btn>
    </template>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import defaultProfileImage from '@/assets/images/profile.png'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'
import {
  mdiAccount,
  mdiLockOutline,
  mdiChevronDown,
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiFullscreen
} from '@mdi/js'

export default defineComponent({
  name: 'AppBar',
  props: {
    fullscreen: {
      type: Function,
      required: true
    }
  },
  setup() {
    //State management
    const appStore = useAppStore()
    const store = useStore()

    //Auth Composable
    const { logOutUser } = useAuthUserRepository()

    //Router
    const router = useRouter()
    const myProfileRoute = () => router.push({ name: 'my-profile' })

    return {
      mdiAccount,
      mdiLockOutline,
      mdiChevronDown,
      mdiWeatherSunny,
      mdiWeatherNight,
      mdiFullscreen,
      appStore,
      defaultProfileImage,
      sidebar: computed(() => appStore.sidebarValue),
      theme: computed(() => appStore.themeValue),
      authProfile: computed(() => store.getters.authProfile),
      logOutUser,
      myProfileRoute
    }
  }
})
</script>
<style>
.main-app-bar .v-toolbar__append {
  align-items: center;
}
</style>
