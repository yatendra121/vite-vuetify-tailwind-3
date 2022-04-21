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
  >
    <v-app-bar-nav-icon @click="appStore.changeSidebar"></v-app-bar-nav-icon>

    <v-app-bar-title> Vue Application (Vue 3)</v-app-bar-title>

    <template #append>
      <v-menu :close-on-click="true" bottom transition="slide-y-transition">
        <template #activator="{ props }">
          <v-btn text class="tw-normal-case" v-bind="props">
            {{ authProfile.email }}
            <v-icon size="24px" :icon="mdiChevronDown"> </v-icon>
          </v-btn>
        </template>
        <v-card class="mx-auto" :rounded="true" :elevation="20">
          <v-list class="tw-mx-2">
            <v-list-item link :to="{ name: 'my-profile' }">
              <v-list-item-avatar tile :icon="mdiAccount">
                <v-avatar
              /></v-list-item-avatar>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-divider />
            <v-list-item link @click="logOutUser">
              <v-list-item-avatar tile>
                <v-avatar :icon="mdiLockOutline"
              /></v-list-item-avatar>
              <v-list-item-title> Logout </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn
        size="small"
        :icon="theme === 'dark' ? mdiWeatherSunny : mdiWeatherNight"
        @click="appStore.changeTheme()"
      ></v-btn>
      <v-btn size="small" :icon="mdiFullscreen" @click="fullscreen"></v-btn>
    </template>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import { useStore } from 'vuex'
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
    const appStore = useAppStore()
    const store = useStore()

    const { logOutUser } = useAuthUserRepository()

    return {
      mdiAccount,
      mdiLockOutline,
      mdiChevronDown,
      mdiWeatherSunny,
      mdiWeatherNight,
      mdiFullscreen,
      appStore,
      sidebar: computed(() => appStore.sidebarValue),
      theme: computed(() => appStore.themeValue),
      authProfile: computed(() => store.getters.authProfile),
      logOutUser
    }
  }
})
</script>
