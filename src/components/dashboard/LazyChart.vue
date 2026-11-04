<template>
  <!-- Reserves the chart's height so the card doesn't jump when it appears. -->
  <div :style="{ minHeight: `${height}px` }">
    <AsyncChart v-bind="$attrs" :height="height" />
  </div>
</template>

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
    const [chart] = await Promise.all([
      import('vue3-apexcharts/core'),
      import('apexcharts/bar'),
      import('apexcharts/donut'),
      import('apexcharts/features/legend')
    ])
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
