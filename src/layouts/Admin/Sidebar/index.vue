<template>
  <!-- A closed drawer stays in the page; keep keyboard focus out of it. -->
  <v-navigation-drawer
    v-if="visible"
    v-model="drawer"
    :width="width"
    :inert="!drawer"
    :location="settings.sidebarPosition"
    :rail="rail"
    :expand-on-hover="!mobile && settings.sidebarMode === 'hover'"
    :floating="settings.sidebarFloating"
    :color="isInk ? 'ink' : undefined"
    :theme="isInk ? 'dark' : undefined"
    :border="isInk || settings.sidebarFloating ? 0 : undefined"
  >
    <div class="py-3" :class="rail ? 'px-2' : 'px-5'">
      <AppLogo />
    </div>

    <v-list
      nav
      density="compact"
      :bg-color="isInk ? 'ink' : undefined"
      aria-label="Main navigation"
    >
      <template v-for="section in sections" :key="section.title">
        <v-divider v-if="rail" class="my-1" />
        <v-list-subheader v-else class="text-uppercase font-weight-bold mt-2">
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
import { useCustomizerStore } from '@/store/reactivity/customizer'
import AppLogo from '@/components/Basic/AppLogo.vue'
import SidebarItem from './SidebarItem.vue'
import { useNavSections } from '../useNavSections'

export default defineComponent({
  name: 'Sidebar',
  components: { SidebarItem, AppLogo },
  setup() {
    const store = useAppStore()
    const customizer = useCustomizerStore()
    const { mobile } = useDisplay()
    const route = useRoute()

    const settings = computed(() => customizer.settings)

    // Horizontal navigation replaces the sidebar, except on small screens.
    const visible = computed(
      () => mobile.value || settings.value.navLayout === 'vertical'
    )
    const rail = computed(
      () =>
        !mobile.value &&
        (settings.value.sidebarMode === 'mini' ||
          settings.value.sidebarMode === 'hover')
    )

    // The drawer overlays the page on small screens, so it must start closed
    // there and get out of the way after each navigation.
    watch(
      [mobile, () => settings.value.sidebarMode],
      () =>
        store.updateSidebar(
          !mobile.value && settings.value.sidebarMode !== 'collapsed'
        ),
      { immediate: true }
    )
    watch(
      () => route.path,
      () => {
        if (mobile.value) store.updateSidebar(false)
      }
    )

    return {
      drawer: computed({
        get: () => store.sidebarValue,
        set: (val: boolean) => store.updateSidebar(val)
      }),
      sections: useNavSections(),
      width: computed(() => store.sidebarWidth),
      settings,
      visible,
      rail,
      mobile,
      isInk: computed(() => settings.value.sidebarStyle === 'ink')
    }
  }
})
</script>
