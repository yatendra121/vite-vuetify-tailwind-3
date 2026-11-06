<script setup lang="ts">
import { computed } from 'vue'
import { mdiCubeOffOutline, mdiImageOffOutline, mdiTagOutline } from '@mdi/js'
import VueApexCharts from './LazyChart.vue'
import { catalogHealth, type DashboardProduct } from './dashboardStats'
import { useChartTheme } from './useChartTheme'

const props = defineProps<{
  products: DashboardProduct[]
  loading: boolean
  failed: boolean
}>()

const health = computed(() => catalogHealth(props.products))

const checks = computed(() => [
  {
    title: 'Out of stock',
    icon: mdiCubeOffOutline,
    count: health.value.outOfStock
  },
  {
    title: 'Without images',
    icon: mdiImageOffOutline,
    count: health.value.withoutImages
  },
  {
    title: 'Sale above list price',
    icon: mdiTagOutline,
    count: health.value.saleAboveList
  }
])

const chartTheme = useChartTheme()
const options = computed(() => {
  const chart = chartTheme.value
  return {
    ...chart.base,
    labels: ['Active', 'Inactive'],
    colors: [chart.primary, chart.secondary],
    stroke: { width: 3, colors: [chart.surface] },
    dataLabels: { enabled: false },
    legend: {
      position: 'bottom' as const,
      fontSize: '13px',
      labels: { colors: chart.label },
      formatter: (name: string, opts?: any) =>
        `${name}: ${opts.w.globals.series[opts.seriesIndex].toLocaleString()}`
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '74%',
          labels: {
            show: true,
            name: { fontSize: '13px', color: chart.label },
            value: { fontSize: '24px', fontWeight: 700, color: chart.text },
            total: {
              show: true,
              label: 'Products',
              color: chart.label,
              formatter: () => props.products.length.toLocaleString()
            }
          }
        }
      }
    }
  }
})
const series = computed(() => [health.value.active, health.value.inactive])
</script>

<template>
  <VCard class="h-100">
    <div class="pa-4 pa-md-6 pb-md-4">
      <h2 class="text-title-medium font-weight-bold">Catalog health</h2>
      <p class="text-body-medium text-medium-emphasis">
        Product status and listings to review.
      </p>
    </div>
    <div class="px-4 px-md-6 pb-4">
      <LoadState :loading="loading" :failed="failed" section>
        <EmptyState
          v-if="!products.length"
          title="No products yet"
          description="Add a product to see its status here."
        />
        <template v-else>
          <VueApexCharts
            type="donut"
            :height="220"
            :options="options"
            :series="series"
          />
          <VList class="pa-0 mt-2" bg-color="rgba(0, 0, 0, 0)" density="compact">
            <template v-for="(check, index) in checks" :key="check.title">
              <VDivider v-if="index" />
              <VListItem
                class="px-0"
                :title="check.title"
                :prepend-icon="check.icon"
              >
                <template #append>
                  <span class="text-body-medium font-weight-bold">
                    {{ check.count.toLocaleString() }}
                  </span>
                </template>
              </VListItem>
            </template>
          </VList>
        </template>
      </LoadState>
    </div>
  </VCard>
</template>
