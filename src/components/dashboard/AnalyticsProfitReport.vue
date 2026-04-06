<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useDisplay, useTheme } from 'vuetify'
import { hexToRgb } from '@/utils/core'
import { computed } from 'vue'

const vuetifyTheme = useTheme()
const display = useDisplay()
const currentYear = new Date().getFullYear()

const series = [{ data: [30, 58, 35, 53, 50, 68] }]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 12,
        blur: 4,
        left: 0,
        enabled: true,
        opacity: 0.12,
        color: currentTheme.warning
      }
    },
    tooltip: { enabled: false },
    colors: [`rgba(${hexToRgb(String(currentTheme.warning))}, 1)`],
    stroke: { width: 4, curve: 'smooth', lineCap: 'round' },
    grid: {
      show: false,
      padding: { top: -21, left: -5, bottom: -8 }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { labels: { show: false } },
    responsive: [
      {
        breakpoint: display.thresholds.value.lg,
        options: { chart: { height: 151, width: '100%' } }
      },
      {
        breakpoint: display.thresholds.value.md,
        options: { chart: { height: 131, width: '100%' } }
      }
    ]
  }
})
</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between align-center h-100 pa-5">
      <div class="d-flex flex-column justify-space-between ga-4">
        <div>
          <p class="text-caption text-medium-emphasis text-uppercase font-weight-medium mb-1" style="letter-spacing: 0.5px">
            Profit Report
          </p>
          <VChip color="warning" size="small" variant="tonal">
            {{ currentYear }}
          </VChip>
        </div>

        <div>
          <div class="text-success d-flex align-center ga-1 mb-1">
            <VIcon icon="mdi-trending-up" size="16" />
            <span class="text-body-2 font-weight-medium">68.2%</span>
          </div>
          <h5 class="text-h5 font-weight-bold">$84,686k</h5>
        </div>
      </div>

      <VueApexCharts
        type="line"
        :height="131"
        width="60%"
        :options="chartOptions"
        :series="series"
      />
    </VCardText>
  </VCard>
</template>
