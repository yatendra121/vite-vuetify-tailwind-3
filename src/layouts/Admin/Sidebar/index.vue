<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="width"
    :elevation="5"
    rounded="lg"
    :style="drawer
      ? 'height: calc(100% - 16px); margin: 8px 0 8px 10px;'
      : 'height: calc(100% - 16px); margin: 8px 0 8px 0;'"
  >
    <!-- Brand -->
    <div class="d-flex align-center ga-2 px-4 py-4 mb-2">
      <v-icon size="28" color="primary">mdi-hexagon-multiple</v-icon>
      <span class="text-subtitle-1 font-weight-bold">Vuetify<strong>Admin</strong></span>
    </div>

    <v-divider class="mb-2" />

    <v-list nav density="compact">
      <sidebar-item v-for="route in router" :key="route.name" :item="route" />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import router from '@/router/admin'
import SidebarItem from './SidebarItem.vue'

export default defineComponent({
  name: 'Sidebar',
  components: { SidebarItem },
  setup() {
    const store = useAppStore()
    return {
      drawer: computed({
        get: () => store.sidebarValue,
        set: (val: boolean) => store.updateSidebar(val)
      }),
      router,
      width: computed(() => store.sidebarWidth)
    }
  }
})
</script>

