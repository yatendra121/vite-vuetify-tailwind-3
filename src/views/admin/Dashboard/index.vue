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
</script>

<template>
  <VRow>
    <!-- 👉 Congratulations -->
    <VCol cols="12" md="8">
      <AnalyticsCongratulations />
    </VCol>

    <VCol cols="12" sm="4">
      <VRow>
        <!-- 👉 Profit -->
        <VCol cols="12" md="6">
          <CardStatisticsVertical
            v-bind="{
              title: 'Profit',
              image: chart,
              stats: '$12,628',
              change: 72.8
            }"
          />
        </VCol>

        <!-- 👉 Sales -->
        <VCol cols="12" md="6">
          <CardStatisticsVertical
            v-bind="{
              title: 'Sales',
              image: wallet,
              stats: '$4,679',
              change: 28.42
            }"
          />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Total Revenue -->
    <VCol cols="12" md="8" order="2" order-md="1">
      <AnalyticsTotalRevenue />
    </VCol>

    <VCol cols="12" sm="8" md="4" order="1" order-md="2">
      <VRow>
        <!-- 👉 Payments -->
        <VCol cols="12" sm="6">
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
        <VCol cols="12" sm="6">
          <CardStatisticsVertical
            v-bind="{
              title: 'Transactions',
              image: card,
              stats: '$14,857',
              change: 28.14
            }"
          />
        </VCol>
      </VRow>

      <VRow>
        <!-- 👉 Profit Report -->
        <VCol cols="12" sm="12">
          <AnalyticsProfitReport />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Order Statistics -->
    <VCol cols="12" md="4" sm="6" order="3">
      <AnalyticsOrderStatistics />
    </VCol>

    <!-- 👉 Tabs chart -->
    <VCol cols="12" md="4" sm="6" order="3">
      <AnalyticsFinanceTabs />
    </VCol>

    <!-- 👉 Transactions -->
    <VCol cols="12" md="4" sm="6" order="3">
      <AnalyticsTransactions />
    </VCol>
  </VRow>
</template>
