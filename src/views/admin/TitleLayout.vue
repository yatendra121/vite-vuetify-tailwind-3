<template>
  <header
    class="page-header position-relative d-flex flex-wrap align-center justify-space-between ga-3 mb-4"
  >
    <h1 class="text-headline-small font-weight-bold">{{ $route.meta.heading }}</h1>
    <div v-if="$slots.default" class="d-flex flex-wrap align-center ga-2">
      <slot />
    </div>
    <!-- Positioned so the page doesn't jump when loading starts and ends. -->
    <v-progress-linear
      v-if="loadingValue"
      class="page-header__progress"
      height="2"
      indeterminate
      color="primary"
      aria-label="Loading"
    />
  </header>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'

export default defineComponent({
  name: 'TitleLayout',
  setup() {
    const appStore = useAppStore()

    return {
      loadingValue: computed(() => appStore.loadingValue)
    }
  }
})
</script>

<style scoped>
.page-header__progress {
  position: absolute;
  inset: auto 0 -9px 0;
}
</style>
