<script setup lang="ts">
import { computed } from 'vue'
import { stockValue, type DashboardProduct } from './dashboardStats'

const props = defineProps<{
  products: DashboardProduct[]
  loading: boolean
  failed: boolean
}>()

const atSalePrice = computed(() => stockValue(props.products, 'salePrice'))
const atListPrice = computed(() => stockValue(props.products, 'price'))
const units = computed(() =>
  props.products.reduce((sum, item) => sum + item.quantity, 0)
)
</script>

<template>
  <VCard color="accent" variant="flat" class="h-100">
    <VCardText class="d-flex flex-column h-100 pa-6">
      <p class="text-body-medium font-weight-medium mb-1">Stock value</p>
      <VSkeletonLoader v-if="loading" type="heading" color="transparent" />
      <template v-else-if="failed">
        <p class="text-headline-large font-weight-bold">—</p>
        <p class="text-body-medium mt-2">Couldn't load products.</p>
      </template>
      <template v-else>
        <p class="text-headline-large font-weight-bold text-break">
          {{ atSalePrice.toLocaleString() }}
        </p>
        <p class="text-body-medium mt-1 mb-6">
          Units in stock × sale price, not sales revenue.
        </p>
        <div class="d-flex flex-wrap ga-6 mt-auto">
          <div>
            <p class="text-body-small">At list price</p>
            <p class="text-title-medium font-weight-bold">
              {{ atListPrice.toLocaleString() }}
            </p>
          </div>
          <div>
            <p class="text-body-small">Units in stock</p>
            <p class="text-title-medium font-weight-bold">
              {{ units.toLocaleString() }}
            </p>
          </div>
        </div>
      </template>
    </VCardText>
  </VCard>
</template>
