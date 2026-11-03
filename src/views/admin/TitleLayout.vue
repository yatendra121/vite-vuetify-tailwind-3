<template>
  <header class="d-flex flex-wrap align-center justify-space-between ga-3 mb-4">
    <h1 class="text-headline-small font-weight-bold">{{ $route.meta.heading }}</h1>
    <div v-if="$slots.default" class="d-flex flex-wrap align-center ga-2">
      <slot />
    </div>
  </header>
  <v-progress-linear
    v-if="loadingValue"
    class="mb-4"
    height="2"
    indeterminate
    color="primary"
  />
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
