<template>
  <AppBar :fullscreen="toggle" />
  <v-main>
    <v-responsive :full-height="true">
      <v-container ref="el" :fluid="true">
        <!-- <v-scroll-x-transition mode="out-in"> -->
        <slot />
        <!-- </v-scroll-x-transition> -->
      </v-container>
    </v-responsive>
  </v-main>
  <Sidebar />
  <Footer />
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
