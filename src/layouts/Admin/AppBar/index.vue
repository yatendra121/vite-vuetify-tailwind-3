<template>
  <v-app-bar height="64" flat border="b">
    <v-app-bar-nav-icon
      aria-label="Toggle navigation"
      @click="appStore.changeSidebar"
    />

    <AppLogo v-if="mobile" class="ms-1" />

    <v-spacer />

    <v-btn
      :icon="theme === 'dark' ? mdiWeatherSunny : mdiWeatherNight"
      :aria-label="theme === 'dark' ? 'Use light theme' : 'Use dark theme'"
      @click="appStore.changeTheme()"
    />

    <v-btn
      :icon="mdiBellOutline"
      aria-label="Notifications"
      @click="notificationToggle = !notificationToggle"
    />

    <v-menu location="bottom end">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          :icon="mobile"
          class="me-2"
          :class="{ 'px-2': !mobile }"
          aria-label="Account menu"
        >
          <v-avatar color="primary" size="32" class="text-body-small font-weight-bold">
            {{ initials }}
          </v-avatar>
          <template v-if="!mobile">
            <span class="ms-2 d-inline-block text-truncate" style="max-width: 160px">
              {{ authProfile?.name }}
            </span>
            <v-icon size="18" class="ms-1" :icon="mdiChevronDown" />
          </template>
        </v-btn>
      </template>
      <v-card width="260" class="mt-2">
        <v-list class="py-1">
          <v-list-item
            :title="authProfile?.name"
            :subtitle="authProfile?.role?.title"
          />
          <v-divider class="my-1" />
          <v-list-item
            :prepend-icon="mdiAccountCircleOutline"
            title="My Profile"
            link
            @click="myProfileRoute"
          />
          <v-list-item
            :prepend-icon="mdiLogout"
            title="Logout"
            link
            @click="logoutUser"
          />
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
  <Notification v-model="notificationToggle" />
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import {
  mdiAccountCircleOutline,
  mdiBellOutline,
  mdiChevronDown,
  mdiLogout,
  mdiWeatherNight,
  mdiWeatherSunny
} from '@mdi/js'
import { useAppStore } from '@/store/reactivity/app'
import { useProfileStore } from '@/store/reactivity/profile'
import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'
import { getInitials } from '@/composables/string'
import AppLogo from '@/components/Basic/AppLogo.vue'
import Notification from './Notification.vue'

const { mobile } = useDisplay()

//State management
const appStore = useAppStore()
const profileStore = useProfileStore()
const theme = computed(() => appStore.themeValue)
const authProfile = computed(() => profileStore.authProfile)

const initials = computed(() => getInitials(authProfile.value?.name))

//Router
const router = useRouter()
const myProfileRoute = () => router.push({ name: 'my-profile' })

//Auth Composable
const { logout } = useAuthProfileRepository()
const logoutUser = () => logout().then(() => router.push('/'))

const notificationToggle = ref(false)
</script>
