<template>
  <v-app-bar
    height="62"
    :border="true"
    :elevation="1"
    rounded="lg"
    :collapse="false"
    :floating="false"
    :color="theme === 'light' ? undefined : undefined"
    class="main-app-bar"
    :style="styles"
  >
    <v-app-bar-nav-icon @click="appStore.changeSidebar"></v-app-bar-nav-icon>

    <v-app-bar-title> Vue Application (Vue 3)</v-app-bar-title>

    <!-- <template v-slot:image v-if="theme === 'light'">
      <v-img
        gradient="90deg, rgba(14,93,2,0.95) 0%, rgba(9,121,120,0.9) 32%, rgba(45,166,190,0.9) 70%, rgba(16,114,134,0.95) 100%"
      ></v-img>
    </template> -->

    <template #append>
      <v-theme-provider :theme="theme">
        <v-menu :persistent="!true">
          <template #activator="{ props }">
            <v-btn variant="flat" color="primary" v-bind="props">
              <p class="text-subtitle-1">
                {{ authProfile?.name }}
              </p>
              <v-icon size="24px" :icon="mdiChevronDown"> </v-icon>
            </v-btn>
          </template>
          <v-sheet rounded="md" width="200" elevation="4" class="mt-2">
            <v-list class="py-0" lines="one">
              <v-list-item
                class="p-2"
                active-color="primary"
                link
                @click="myProfileRoute"
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                :title="authProfile?.name"
                :subtitle="authProfile?.role?.title"
              >
              </v-list-item>

              <!-- <v-list-item active-color="primary">
                <template #prepend>
                  <v-icon size="24px" :icon="mdiTableColumn"> </v-icon>
                </template>
                <v-list-item-title class="pl-4 text-body-1"
                  >My Account</v-list-item-title
                >
              </v-list-item> -->
            </v-list>
            <v-divider />
            <div class="pt-4 pb-4 px-5 text-center">
              <v-btn
                @click="logoutUser"
                :prepend-icon="mdiLockOutline"
                color="primary"
                variant="outlined"
                block
                >Logout</v-btn
              >
            </div>
          </v-sheet>
        </v-menu>

        <!-- <v-menu :close-on-content-click="false" location="bottom">
        <template #activator="{ props }">
          <v-btn :icon="mdiCogOutline" v-bind="props"> </v-btn>
        </template>

        <v-card min-width="100">
          <v-list-item v-for="(item, i) in items2" :key="i" :value="item">
            <template #prepend>
              <v-icon :icon="mdiWeatherSunny"></v-icon>
            </template>
            <v-list-item-action>
              <v-switch
                inset
                color="secondary"
                value="secondary"
                hide-details
              ></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-menu> -->
        <v-divider vertical class="pe-4"></v-divider>

        <v-btn
          :icon="theme === 'dark' ? mdiWeatherSunny : mdiWeatherNight"
          @click="appStore.changeTheme()"
        ></v-btn>

        <v-btn
          @click="notificationToggle = !notificationToggle"
          :icon="mdiNotificationClearAll"
        ></v-btn>

        <v-menu :close-on-content-click="false" location="bottom" class="pe-2">
          <template #activator="{ props }">
            <v-btn :icon="mdiCogOutline" v-bind="props"> </v-btn>
          </template>

          <v-card class="mx-auto" max-width="450">
            <v-toolbar color="cyan-lighten-1">
              <v-btn variant="text" :icon="mdiMenu"></v-btn>

              <v-toolbar-title>Inbox</v-toolbar-title>

              <v-btn variant="text" :icon="mdiMagnify"></v-btn>
            </v-toolbar>

            <v-list :items="items" item-props lines="three">
              <template #subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
              </template>
            </v-list>
          </v-card>
        </v-menu>

        <!-- <v-btn :icon="mdiFullscreen" @click="fullscreen"></v-btn> -->
      </v-theme-provider>
    </template>
  </v-app-bar>
  <Notification
    @update:model-value="notificationHandler"
    :model-value="notificationToggle"
  />
</template>
<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import { useProfileStore } from '@/store/reactivity/profile'
import { useRouter } from 'vue-router'
import defaultProfileImage from '@/assets/images/profile.png'
import Notification from './Notification.vue'
import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'
import {
  mdiLockOutline,
  mdiChevronDown,
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiCogOutline,
  mdiNotificationClearAll,
  mdiMenu,
  mdiMagnify
} from '@mdi/js'

export default defineComponent({
  name: 'AppBar',
  components: {
    Notification
  },
  props: {
    fullscreen: {
      type: Function,
      required: true
    }
  },
  setup() {
    const items = [
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
    //State management
    const appStore = useAppStore()
    const profileStore = useProfileStore()

    //Router
    const router = useRouter()
    const myProfileRoute = () => router.push({ name: 'my-profile' })

    //Auth Composable
    const { logout } = useAuthProfileRepository()
    const logoutUser = () => logout().then(() => router.push('/'))

    const width = computed(() =>
      appStore.sidebarValue ? appStore.sidebarWidth : 0
    )
    const styles = reactive({
      active: true,
      get left() {
        return `${width.value + 30}px`
      },
      get width() {
        return `calc(100% - ${width.value + 60}px)`
      }
    })

    const notificationToggle = ref(false)
    const notificationHandler = (val: boolean) =>
      (notificationToggle.value = val)

    return {
      notificationHandler,
      mdiLockOutline,
      mdiChevronDown,
      mdiWeatherSunny,
      mdiWeatherNight,
      appStore,
      defaultProfileImage,
      mdiCogOutline,
      mdiNotificationClearAll,
      mdiMenu,
      mdiMagnify,
      items,
      sidebar: computed(() => appStore.sidebarValue),
      theme: computed(() => appStore.themeValue),
      authProfile: computed(() => profileStore.authProfile),
      notificationToggle,
      logoutUser,
      myProfileRoute,
      styles,
      width
    }
  }
})
</script>
<style>
@layer overrides {
  .main-app-bar {
    margin-top: 6px;
  }
}
</style>
