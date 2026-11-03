<script setup lang="ts">
import AnalyticsCongratulations from '@/components/dashboard/AnalyticsCongratulations.vue'
import AnalyticsFinanceTabs from '@/components/dashboard/AnalyticsFinanceTab.vue'
import AnalyticsOrderStatistics from '@/components/dashboard/AnalyticsOrderStatistics.vue'
import AnalyticsProfitReport from '@/components/dashboard/AnalyticsProfitReport.vue'
import AnalyticsTotalRevenue from '@/components/dashboard/AnalyticsTotalRevenue.vue'
import AnalyticsTransactions from '@/components/dashboard/AnalyticsTransactions.vue'
import CardStatisticsVertical from '@/components/cards/CardStatisticsVertical.vue'

// 👉 Images
import chart from '@/assets/images/cards/chart-success.png'
import card from '@/assets/images/cards/credit-card-primary.png'
import paypal from '@/assets/images/cards/paypal-error.png'
import wallet from '@/assets/images/cards/wallet-info.png'
import { useAsyncAxios } from '@qnx/composables/axios'
import { reactive } from 'vue'

const countValues = reactive({
  user: 0,
  product: 0
})

useAsyncAxios(`user/dashboard-count`, {
  method: 'GET'
}).then((res) => {
  countValues.user = res.data.user
  countValues.product = res.data.product
})
</script>

<template>
  <title-layout />
  <VRow>
    <!-- 👉 Congratulations -->
    <VCol cols="12" md="8">
      <AnalyticsCongratulations />
    </VCol>

    <VCol cols="12" md="4">
      <VRow class="h-100">
        <!-- 👉 Profit -->
        <VCol cols="6">
          <CardStatisticsVertical
            v-bind="{
              title: 'User',
              image: chart,
              stats: `${countValues.user}`,
              change: 72.8
            }"
          />
        </VCol>

        <!-- 👉 Sales -->
        <VCol cols="6">
          <CardStatisticsVertical
            v-bind="{
              title: 'Product',
              image: wallet,
              stats: `${countValues.product}`,
              change: 28.42
            }"
          />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Total Revenue -->
    <VCol cols="12" md="8">
      <AnalyticsTotalRevenue />
    </VCol>

    <VCol cols="12" md="4">
      <VRow>
        <!-- 👉 Payments -->
        <VCol cols="6">
          <CardStatisticsVertical
            v-bind="{
              title: 'Payments',
              image: paypal,
              stats: '$2,468',
              change: -14.82
            }"
          />
        </VCol>

        <!-- 👉 Revenue -->
        <VCol cols="6">
          <CardStatisticsVertical
            v-bind="{
              title: 'Transactions',
              image: card,
              stats: '$14,857',
              change: 28.14
            }"
          />
        </VCol>

        <!-- 👉 Profit Report -->
        <VCol cols="12">
          <AnalyticsProfitReport />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Order Statistics -->
    <VCol cols="12" sm="6" lg="4">
      <AnalyticsOrderStatistics />
    </VCol>

    <!-- 👉 Tabs chart -->
    <VCol cols="12" sm="6" lg="4">
      <AnalyticsFinanceTabs />
    </VCol>

    <!-- 👉 Transactions -->
    <VCol cols="12" lg="4">
      <AnalyticsTransactions />
    </VCol>
  </VRow>
</template>
