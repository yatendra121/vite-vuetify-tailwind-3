<template>
  <v-navigation-drawer
    :rail="false"
    v-model="drawer"
    :elevation="5"
    rounded="lg"
    class="ma-2 main-side-bar"
    :width="width"
  >
    <!-- <template #image>
      <v-img :src="sidebarImage"></v-img>
    </template> -->
    <!-- v-model="drawer" -->
    <perfect-scrollbar class="scrollnavbar"
      ><v-list nav rounded="xl">
        <sidebar-item v-for="route in router" :key="route.name" :item="route" />
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script lang="ts">
/* eslint-disable vue/no-use-v-if-with-v-for */
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import router from '@/router/admin'
import SidebarItem from './SidebarItem.vue'
import sidebarImage from '@/assets/images/sidebar.jpg'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  setup() {
    const store = useAppStore()

    const width = computed(() => store.sidebarWidth)

    return {
      drawer: computed({
        get: () => store.sidebarValue,
        set: (val: boolean) => {
          store.updateSidebar(val)
        }
      }),
      sidebarImage,
      router,
      width
    }
  }
})
</script>
<style>
.scrollnavbar {
  height: calc(100vh - 80px);
}
.main-side-bar {
  height: calc(100% - 15px) !important;
}
</style>
