<template>
  <Sidebar></Sidebar>
  <AppBar :fullscreen="toggle" />
  <v-main>
    <v-responsive :full-height="true">
      <v-container ref="el" :fluid="true">
        <!-- <v-scroll-x-transition mode="out-in"> -->
        <slot />
        <!-- </v-scroll-x-transition> -->
        <BottomNavigation />
      </v-container>
    </v-responsive>
  </v-main>

  <BottomBar />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppBar from './AppBar/index.vue'
import BottomBar from './Bottom/index.vue'
import BottomNavigation from './Bottom/BottomNavigation.vue'
import Sidebar from './Sidebar/index.vue'
import Notification from './AppBar/Notification.vue'

import { useFullscreen } from '@vueuse/core'
export default defineComponent({
  components: {
    AppBar,
    BottomBar,
    Sidebar,
    Notification,
    BottomNavigation
  },
  setup() {
    const el = ref<HTMLElement | null>(null)
    const { toggle } = useFullscreen(el)

    return {
      toggle,
      el
    }
  }
})
</script>
