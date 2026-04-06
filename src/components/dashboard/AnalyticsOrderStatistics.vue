<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { computed } from 'vue'
import { hexToRgb } from '@/utils/core'

const vuetifyTheme = useTheme()
const series = [45, 80, 20, 40]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`
  const primaryTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['high-emphasis-opacity']})`

  return {
    chart: { sparkline: { enabled: true }, animations: { enabled: false } },
    stroke: { width: 6, colors: [currentTheme.surface] },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Fashion', 'Electronic', 'Sports', 'Decor'],
    colors: [currentTheme.success, currentTheme.primary, currentTheme.secondary, currentTheme.info],
    grid: { padding: { top: -7, bottom: 5 } },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } }
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: { offsetY: 17, fontSize: '13px', color: disabledTextColor, fontFamily: 'DM Sans' },
            value: { offsetY: -17, fontSize: '22px', color: primaryTextColor, fontFamily: 'DM Sans' },
            total: { show: true, label: 'Weekly', fontSize: '13px', formatter: () => '38%', color: disabledTextColor, fontFamily: 'DM Sans' }
          }
        }
      }
    }
  }
})

const orders = [
  { amount: '82.5k', title: 'Electronic', avatarColor: 'primary', subtitle: 'Mobile, Earbuds, TV',      avatarIcon: 'mdi-cellphone'    },
  { amount: '23.8k', title: 'Fashion',    avatarColor: 'success', subtitle: 'T-shirt, Jeans, Shoes',    avatarIcon: 'mdi-hanger'       },
  { amount: '849',   title: 'Decor',      avatarColor: 'info',    subtitle: 'Fine Art, Dining',          avatarIcon: 'mdi-home-outline' },
  { amount: '99',    title: 'Sports',     avatarColor: 'secondary',subtitle: 'Football, Cricket Kit',   avatarIcon: 'mdi-soccer'       }
]
</script>

<template>
  <VCard>
    <VCardItem class="pb-2">
      <VCardTitle class="text-body-1 font-weight-bold">Order Statistics</VCardTitle>
      <VCardSubtitle>42.82k Total Sales</VCardSubtitle>
    </VCardItem>

    <VCardText>
      <div class="d-flex align-center justify-space-between mb-4">
        <div>
          <h4 class="text-h4 font-weight-bold mb-0">8,258</h4>
          <span class="text-caption text-medium-emphasis">Total Orders</span>
        </div>
        <VueApexCharts
          type="donut"
          :height="120"
          width="110"
          :options="chartOptions"
          :series="series"
        />
      </div>

      <VDivider class="mb-3" />

      <VList lines="two" class="pa-0">
        <VListItem
          v-for="order in orders"
          :key="order.title"
          class="px-0"
        >
          <template #prepend>
            <VAvatar rounded="lg" variant="tonal" :color="order.avatarColor" size="38" class="me-3">
              <VIcon :icon="order.avatarIcon" size="20" />
            </VAvatar>
          </template>

          <VListItemTitle class="text-body-2 font-weight-medium">{{ order.title }}</VListItemTitle>
          <VListItemSubtitle class="text-caption">{{ order.subtitle }}</VListItemSubtitle>

          <template #append>
            <span class="text-body-2 font-weight-bold">{{ order.amount }}</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
