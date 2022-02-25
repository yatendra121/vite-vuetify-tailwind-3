<template>
  <v-app-bar
    height="65"
    app
    :border="false"
    :elevation="1"
    :rounded="false"
    :collapse="false"
    flat
    floating
  >
    <v-app-bar-nav-icon @click="appStore.changeSidebar"></v-app-bar-nav-icon>

    <v-toolbar-title> Vue Application (Vue 3)</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-menu :close-on-click="true" bottom transition="slide-y-transition">
      <template #activator="{ props }">
        <v-btn text class="tw-normal-case" v-bind="props">
          {{ authProfile.email }} <v-icon>mdi-chevron-down</v-icon></v-btn
        >
      </template>
      <v-card class="mx-auto" :rounded="true" :elevation="20">
        <v-list class="tw-mx-2">
          <v-list-item link :to="{ name: 'my-profile' }">
            <v-list-item-avatar tile color="grey">
              <v-avatar icon="mdi-account"
            /></v-list-item-avatar>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item link @click="logOutUser">
            <v-list-item-avatar tile color="grey">
              <v-avatar icon="mdi-lock-outline"
            /></v-list-item-avatar>
            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn
      size="small"
      :icon="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      @click="appStore.changeTheme()"
    ></v-btn>
    <v-btn size="small" icon="mdi-fullscreen" @click="fullscreen"></v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import { useStore } from 'vuex'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'

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
      appStore,
      sidebar: computed(() => appStore.sidebarValue),
      theme: computed(() => appStore.themeValue),
      authProfile: computed(() => store.getters.authProfile),
      logOutUser
    }
  }
})
</script>
