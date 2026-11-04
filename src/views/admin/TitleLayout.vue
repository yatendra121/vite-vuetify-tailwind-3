<template>
  <header
    class="page-header position-relative d-flex flex-wrap align-center justify-space-between ga-3 mb-6"
  >
    <div>
      <p
        v-if="section"
        class="text-label-medium text-uppercase font-weight-bold text-medium-emphasis mb-1"
      >
        {{ section }}
      </p>
      <h1 class="text-headline-medium font-weight-bold">
        {{ $route.meta.heading }}
      </h1>
    </div>
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
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/reactivity/app'

export default defineComponent({
  name: 'TitleLayout',
  setup() {
    const appStore = useAppStore()
    const route = useRoute()

    return {
      section: computed(() => route.matched[0]?.meta.section),
      loadingValue: computed(() => appStore.loadingValue)
    }
  }
})
</script>

<style scoped>
.page-header__progress {
  position: absolute;
  inset: auto 0 -12px 0;
}
</style>
