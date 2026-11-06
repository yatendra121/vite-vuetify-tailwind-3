<template>
  <!-- Reserves the chart's height so the card doesn't jump when it appears. -->
  <div :style="{ minHeight: `${height}px` }">
    <AsyncChart v-bind="$attrs" :height="height" />
  </div>
</template>

<script lang="ts">
let charts: Promise<unknown> | undefined

/**
 * Start fetching ApexCharts. The dashboard calls this as it starts loading
 * data, so the download overlaps the requests instead of following them.
 */
export const loadCharts = () =>
  (charts ??= Promise.all([
    import('vue3-apexcharts/core'),
    import('apexcharts/bar'),
    import('apexcharts/donut'),
    import('apexcharts/features/legend')
  ]))
</script>

<script lang="ts" setup>
import { defineAsyncComponent, h } from 'vue'
import { VSkeletonLoader } from 'vuetify/components'
import EmptyState from '@/components/Basic/EmptyState.vue'

defineOptions({ inheritAttrs: false })
const { height } = defineProps<{ height: number }>()

// ApexCharts is the largest library in the app, so the page's figures appear
// first. Importing only the chart types in use also skips most of its code.
const AsyncChart = defineAsyncComponent({
  loader: async () => {
    const [chart] = (await loadCharts()) as [
      typeof import('vue3-apexcharts/core')
    ]
    return chart.default
  },
  loadingComponent: {
    render: () => h(VSkeletonLoader, { type: 'image' })
  },
  errorComponent: {
    render: () =>
      h(EmptyState, {
        title: "Couldn't load this chart",
        description: 'Reload the page to try again.'
      })
  }
})
</script>
