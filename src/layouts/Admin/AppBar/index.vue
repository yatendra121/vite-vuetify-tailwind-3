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
      <v-menu :close-on-click="true">
        <template #activator="{ props }">
          <v-btn flat variant="text" v-bind="props">
            <p class="tw-normal-case text-subtitle-1">
              {{ authProfile?.name }}
            </p>
            <v-icon size="24px" :icon="mdiChevronDown"> </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item
              class="tw-p-[20px]"
              link
              @click="myProfileRoute"
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
              :title="authProfile?.name"
              :subtitle="authProfile?.role?.title"
            >
              <template v-slot:append>
                <!-- <v-btn
                  variant="text"
                  :class="fav ? 'text-red' : ''"
                  icon="mdi-heart"
                  @click="fav = !fav"
                ></v-btn> -->
              </template>
            </v-list-item>

            <v-divider />

            <v-list-item
              @click="logOutUser"
              :prepend-icon="mdiLockOutline"
              title="Logout"
            >
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu :close-on-content-click="false" bottom>
        <template v-slot:activator="{ props }">
          <v-btn :icon="mdiCogOutline" v-bind="props"> </v-btn>
        </template>

        <v-card min-width="200">
          <v-list>
            <v-list-item>
              <v-switch
                v-model="message"
                color="purple"
                label="Enable messages"
                hide-details
              ></v-switch>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-switch
                v-model="hints"
                color="purple"
                label="Enable hints"
                hide-details
              ></v-switch>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu :close-on-content-click="false" bottom>
        <template v-slot:activator="{ props }">
          <v-btn :icon="mdiCogOutline" v-bind="props"> </v-btn>
        </template>

        <v-card class="mx-auto" max-width="450">
          <v-toolbar color="cyan-lighten-1">
            <v-btn variant="text" icon="mdi-menu"></v-btn>

            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-btn variant="text" icon="mdi-magnify"></v-btn>
          </v-toolbar>

          <v-list :items="items" item-props lines="three">
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-card>
      </v-menu>

      <v-btn
        :icon="theme === 'dark' ? mdiWeatherSunny : mdiWeatherNight"
        @click="appStore.changeTheme()"
      ></v-btn>
      <v-btn :icon="mdiFullscreen" @click="fullscreen"></v-btn>
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
  mdiFullscreen,
  mdiSettingsHelper,
  mdiKeyChange,
  mdiCogOutline
} from '@mdi/js'

export default defineComponent({
  name: 'AppBar',
  props: {
    fullscreen: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    items: [
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  }),
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
      mdiSettingsHelper,
      appStore,
      defaultProfileImage,
      mdiKeyChange,
      mdiCogOutline,
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
