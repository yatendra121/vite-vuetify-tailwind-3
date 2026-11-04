<script setup lang="ts">
import { computed, ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { monthlyActivity, type DatedRecord } from './dashboardStats'
import { useChartTheme } from './useChartTheme'

const props = defineProps<{
  products: DatedRecord[]
  accounts: DatedRecord[]
  accountsFailed: boolean
  loading: boolean
  failed: boolean
}>()

const ranges = [
  { value: 3, label: '3M' },
  { value: 12, label: '12M' },
  { value: null, label: 'All' }
]
const range = ref<number | null>(null)

const activity = computed(() =>
  monthlyActivity([props.products, props.accounts], range.value)
)
const series = computed(() => [
  { name: 'Products added', data: activity.value.counts[0] },
  ...(props.accountsFailed
    ? []
    : [{ name: 'Accounts created', data: activity.value.counts[1] }])
])

const chartTheme = useChartTheme()
const options = computed(() => {
  const chart = chartTheme.value
  const labelStyle = { colors: chart.label, fontSize: '12px' }
  return {
    ...chart.base,
    colors: [chart.primary, chart.accent],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '60%',
        borderRadiusApplication: 'end' as const
      }
    },
    dataLabels: { enabled: false },
    grid: { borderColor: chart.grid, strokeDashArray: 4 },
    legend: {
      position: 'top' as const,
      horizontalAlign: 'left' as const,
      fontSize: '13px',
      labels: { colors: chart.label }
    },
    tooltip: {
      ...chart.base.tooltip,
      shared: true,
      intersect: false,
      x: { format: 'MMM yyyy' }
    },
    xaxis: {
      type: 'datetime' as const,
      categories: activity.value.months.map((month) => `${month}-01`),
      axisBorder: { show: false },
      axisTicks: { show: false },
      tickAmount: Math.min(activity.value.months.length - 1, 5),
      labels: { format: 'MMM yyyy', style: labelStyle }
    },
    yaxis: {
      forceNiceScale: true,
      labels: {
        style: labelStyle,
        formatter: (value: number) => Math.round(value).toLocaleString()
      }
    }
  }
})
</script>

<template>
  <VCard class="h-100">
    <div
      class="d-flex flex-wrap align-center justify-space-between ga-3 pa-4 pa-md-6 pb-md-4"
    >
      <div>
        <h2 class="text-title-medium font-weight-bold">New records by month</h2>
        <p class="text-body-medium text-medium-emphasis">
          When products and accounts were created.
        </p>
      </div>
      <VBtnToggle
        v-model="range"
        mandatory
        density="compact"
        variant="tonal"
        rounded="pill"
        color="primary"
        aria-label="Date range"
      >
        <VBtn
          v-for="item in ranges"
          :key="item.label"
          :value="item.value"
          size="small"
        >
          {{ item.label }}
        </VBtn>
      </VBtnToggle>
    </div>
    <div class="px-2 px-md-4 pb-4">
      <LoadState :loading="loading" :failed="failed" section>
        <VueApexCharts
          v-if="activity.hasData"
          type="bar"
          :height="280"
          :options="options"
          :series="series"
        />
        <EmptyState
          v-else
          title="Nothing added in this period"
          description="Choose a longer date range to see earlier records."
        />
      </LoadState>
    </div>
  </VCard>
</template>
