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
import { useProfileStore } from '@/store/reactivity/profile'
import { defineComponent, computed } from 'vue'
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
    const profileStore = useProfileStore()
    //console.log(store.getters.authProfile);
    return {
      // access a getter in computed function
      authProfile: computed(() => profileStore.authProfile)
    }
  }
})
</script>
