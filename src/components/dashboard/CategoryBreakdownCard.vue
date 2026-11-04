<script setup lang="ts">
import { computed, ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import {
  categoryBreakdown,
  type CategoryMetric,
  type DashboardCategory,
  type DashboardProduct
} from './dashboardStats'
import { useChartTheme } from './useChartTheme'

const props = defineProps<{
  products: DashboardProduct[]
  categories: DashboardCategory[]
  loading: boolean
  failed: boolean
}>()

const metrics: { value: CategoryMetric; label: string; short: string }[] = [
  { value: 'products', label: 'Products', short: 'Products' },
  { value: 'units', label: 'Units in stock', short: 'Units' },
  { value: 'value', label: 'Stock value', short: 'Value' }
]
const metric = ref<CategoryMetric>('products')
const metricLabel = computed(
  () => metrics.find(({ value }) => value === metric.value)?.label ?? ''
)

const rows = computed(() =>
  categoryBreakdown(props.products, props.categories, metric.value)
)

const chartTheme = useChartTheme()
const options = computed(() => {
  const chart = chartTheme.value
  const format = (value: number) => Number(value).toLocaleString()
  return {
    ...chart.base,
    colors: [chart.primary],
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        borderRadiusApplication: 'end' as const,
        barHeight: '62%',
        dataLabels: { position: 'top' as const }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: format,
      offsetX: 24,
      style: { colors: [chart.text], fontWeight: 600, fontSize: '12px' }
    },
    grid: {
      borderColor: chart.grid,
      padding: { right: 56, top: -12, bottom: -8 },
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: false } }
    },
    legend: { show: false },
    tooltip: {
      ...chart.base.tooltip,
      y: {
        formatter: format,
        title: { formatter: () => `${metricLabel.value}:` }
      }
    },
    xaxis: {
      categories: rows.value.map(({ name }) => name),
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      labels: {
        maxWidth: 160,
        style: { colors: chart.label, fontSize: '13px' }
      }
    }
  }
})
const series = computed(() => [
  { name: metricLabel.value, data: rows.value.map(({ value }) => value) }
])
const height = computed(() => Math.max(240, rows.value.length * 40))
</script>

<template>
  <VCard class="h-100">
    <div
      class="d-flex flex-wrap align-center justify-space-between ga-3 pa-4 pa-md-6 pb-md-4"
    >
      <div>
        <h2 class="text-title-medium font-weight-bold">Catalog by category</h2>
        <p class="text-body-medium text-medium-emphasis">
          All products, active and inactive.
        </p>
      </div>
      <VBtnToggle
        v-model="metric"
        mandatory
        density="compact"
        variant="tonal"
        rounded="pill"
        color="primary"
        aria-label="Measure categories by"
      >
        <VBtn
          v-for="item in metrics"
          :key="item.value"
          :value="item.value"
          :aria-label="item.label"
          size="small"
        >
          {{ item.short }}
        </VBtn>
      </VBtnToggle>
    </div>
    <div class="px-2 px-md-4 pb-4">
      <LoadState :loading="loading" :failed="failed" section>
        <VueApexCharts
          v-if="rows.length"
          type="bar"
          :height="height"
          :options="options"
          :series="series"
        />
        <EmptyState
          v-else
          title="No categories yet"
          description="Add a category to see the breakdown here."
        />
      </LoadState>
    </div>
  </VCard>
</template>
