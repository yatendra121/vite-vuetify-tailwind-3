<template>
  <AppBar />
  <NavigationDrawer />
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    <Footer />
  </v-main>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import AppBar from './AppBar/AppBar.vue'
import Footer from './Footer/Footer.vue'
import NavigationDrawer from './Sidebar/NavigationDrawer.vue'
export default defineComponent({
  components: {
    AppBar,
    Footer,
    NavigationDrawer
  },
  setup() {
    const store = useStore()
    //console.log(store.getters.authProfile);
    return {
      // access a getter in computed function
      authProfile: computed(() => store.getters.authProfile)
    }
  }
})
</script>
