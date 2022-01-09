<template>
  <AppBar :fullscreen="toggle" />

  <v-main>
    <v-layout :full-height="true">
      <v-container fluid ref="el">
        <!-- <v-scroll-x-transition mode="out-in"> -->
        <slot />
        <!-- </v-scroll-x-transition> -->
      </v-container>
    </v-layout>
    <Footer />
  </v-main>

  <Sidebar />

  <!-- <div
    v-if="authProfile"
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      <img
        class="h-12 w-12"
        :src="authProfile.profile_image ? authProfile.profile_image.path : ''"
        alt="ChitChat Logo"
      />
    </div>
    <div>
      <div class="text-xl font-medium text-black">{{ authProfile.name }}</div>
      <p class="text-gray-500">{{ authProfile.email }}</p>
    </div>
  </div> -->
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import AppBar from './AppBar/index.vue'
import Footer from './Footer/index.vue'
import Sidebar from './Sidebar/index.vue'
import { useFullscreen } from '@vueuse/core'
export default defineComponent({
  components: {
    AppBar,
    Footer,
    Sidebar
  },
  setup() {
    const store = useStore()
    //console.log(store.getters.authProfile);

    const el = ref<HTMLElement | null>(null)
    const { toggle } = useFullscreen(el)

    return {
      toggle,
      el,
      // access a getter in computed function
      authProfile: computed(() => store.getters.authProfile)
    }
  }
})
</script>
