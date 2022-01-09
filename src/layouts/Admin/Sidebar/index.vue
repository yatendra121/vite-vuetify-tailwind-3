<template>
  <v-navigation-drawer v-model="drawer" app :elevation="1">
    <v-list>
      <sidebar-item
        :item="route"
        v-for="route in router.options?.routes"
        :key="route"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import router from '@/router'
import SidebarItem from './SidebarItem.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  setup() {
    const store = useAppStore()

    return {
      drawer: computed({
        get: () => store.sidebarValue,
        set: (val: boolean) => {
          store.updateSidebar(val)
        }
      }),
      router
    }
  }
})
</script>
