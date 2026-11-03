<template>
  <v-navigation-drawer v-model="drawer" :width="width">
    <div class="px-4 py-4">
      <AppLogo />
    </div>

    <v-divider />

    <v-list nav density="compact" aria-label="Main navigation">
      <template v-for="section in sections" :key="section.title">
        <v-list-subheader class="text-uppercase font-weight-bold">
          {{ section.title }}
        </v-list-subheader>
        <sidebar-item
          v-for="route in section.routes"
          :key="route.path"
          :item="route"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useAppStore } from '@/store/reactivity/app'
import routes, { navSections } from '@/router/admin'
import AppLogo from '@/components/Basic/AppLogo.vue'
import SidebarItem from './SidebarItem.vue'

export default defineComponent({
  name: 'Sidebar',
  components: { SidebarItem, AppLogo },
  setup() {
    const store = useAppStore()
    const { mobile } = useDisplay()
    const route = useRoute()

    // The drawer overlays the page on small screens, so it must start closed
    // there and get out of the way after each navigation.
    if (mobile.value) store.updateSidebar(false)
    watch(
      () => route.path,
      () => {
        if (mobile.value) store.updateSidebar(false)
      }
    )

    const sections = navSections
      .map((title) => ({
        title,
        routes: routes.filter(
          (item) => item.meta?.section === title && !item.meta?.hidden
        )
      }))
      .filter((section) => section.routes.length)

    return {
      drawer: computed({
        get: () => store.sidebarValue,
        set: (val: boolean) => store.updateSidebar(val)
      }),
      sections,
      width: computed(() => store.sidebarWidth)
    }
  }
})
</script>
