<template>
  <a class="skip-link" href="#main-content" @click.prevent="skipToContent">
    Skip to content
  </a>
  <Sidebar />
  <AppBar />
  <Customizer />
  <v-main id="main-content" tabindex="-1">
    <!-- Keeps the footer at the bottom of the window on short pages. -->
    <div
      class="d-flex flex-column"
      style="min-height: calc(100dvh - var(--v-layout-top) - var(--v-layout-bottom))"
    >
      <v-container
        :fluid="settings.contentWidth === 'fluid'"
        class="flex-grow-1"
        :class="containerPadding"
      >
        <slot />
      </v-container>
      <BottomBar />
    </div>
  </v-main>
  <BottomNavigation />
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import AppBar from './AppBar/index.vue'
import BottomBar from './Bottom/index.vue'
import BottomNavigation from './Bottom/BottomNavigation.vue'
import Customizer from './Customizer/index.vue'
import Sidebar from './Sidebar/index.vue'
import { useCustomizerStore } from '@/store/reactivity/customizer'

const customizer = useCustomizerStore()
const settings = computed(() => customizer.settings)

const containerPadding = computed(
  () =>
    ({
      compact: 'pa-2 pa-md-3',
      default: 'pa-4 pa-md-6',
      spacious: 'pa-6 pa-md-10'
    })[settings.value.spacing]
)

const skipToContent = () => document.getElementById('main-content')?.focus()
</script>
