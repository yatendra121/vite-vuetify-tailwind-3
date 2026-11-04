<script setup lang="ts">
import { computed } from 'vue'
import {
  mdiAccountGroupOutline,
  mdiPackageVariantClosed,
  mdiShapeOutline,
  mdiShieldAccountOutline
} from '@mdi/js'
import ActivityCard from '@/components/dashboard/ActivityCard.vue'
import CatalogHealthCard from '@/components/dashboard/CatalogHealthCard.vue'
import CategoryBreakdownCard from '@/components/dashboard/CategoryBreakdownCard.vue'
import DashboardHero from '@/components/dashboard/DashboardHero.vue'
import RecentProductsCard from '@/components/dashboard/RecentProductsCard.vue'
import StatCard from '@/components/dashboard/StatCard.vue'
import StockValueCard from '@/components/dashboard/StockValueCard.vue'
import { useDashboardData } from './useDashboardData'

const { counts, products, categories, accounts } = useDashboardData()

const stats = computed(() => [
  {
    title: 'Active customers',
    icon: mdiAccountGroupOutline,
    color: 'primary',
    value: counts.data.value?.user ?? null,
    loading: counts.loading.value,
    to: { name: 'user.list' }
  },
  {
    title: 'Active admins',
    icon: mdiShieldAccountOutline,
    color: 'secondary',
    value: counts.data.value?.admin ?? null,
    loading: counts.loading.value,
    to: { name: 'admin.list' }
  },
  {
    title: 'Active products',
    icon: mdiPackageVariantClosed,
    color: 'info',
    value: counts.data.value?.product ?? null,
    loading: counts.loading.value,
    to: { name: 'product.list' }
  },
  {
    title: 'Categories',
    icon: mdiShapeOutline,
    color: 'warning',
    value: categories.failed.value ? null : categories.data.value.length,
    loading: categories.loading.value,
    to: { name: 'category.list' }
  }
])

const catalogLoading = computed(
  () => products.loading.value || categories.loading.value
)
const catalogFailed = computed(
  () => products.failed.value || categories.failed.value
)
</script>

<template>
  <title-layout />
  <VRow>
    <VCol cols="12" md="8">
      <DashboardHero />
    </VCol>
    <VCol cols="12" md="4">
      <StockValueCard
        :products="products.data.value"
        :loading="products.loading.value"
        :failed="products.failed.value"
      />
    </VCol>

    <VCol v-for="stat in stats" :key="stat.title" cols="12" sm="6" lg="3">
      <StatCard v-bind="stat" />
    </VCol>

    <VCol cols="12" lg="8">
      <CategoryBreakdownCard
        :products="products.data.value"
        :categories="categories.data.value"
        :loading="catalogLoading"
        :failed="catalogFailed"
      />
    </VCol>
    <VCol cols="12" lg="4">
      <CatalogHealthCard
        :products="products.data.value"
        :loading="products.loading.value"
        :failed="products.failed.value"
      />
    </VCol>

    <VCol cols="12" lg="7">
      <ActivityCard
        :products="products.data.value"
        :accounts="accounts.data.value"
        :accounts-failed="accounts.failed.value"
        :loading="products.loading.value || accounts.loading.value"
        :failed="products.failed.value"
      />
    </VCol>
    <VCol cols="12" lg="5">
      <RecentProductsCard
        :products="products.data.value"
        :loading="products.loading.value"
        :failed="products.failed.value"
      />
    </VCol>

    <VCol cols="12">
      <VAlert type="info">
        <template #title>
          <span class="text-title-small font-weight-bold">
            Sales figures aren't available yet
          </span>
        </template>
        Revenue, orders, income, expenses and transactions will appear here once
        the store's API provides order data.
      </VAlert>
    </VCol>
  </VRow>
</template>
