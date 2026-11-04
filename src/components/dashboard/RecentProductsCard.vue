<script setup lang="ts">
import { computed } from 'vue'
import { mdiChevronRight } from '@mdi/js'
import { recentProducts, type DashboardProduct } from './dashboardStats'
import { useDateRepository } from '@/composables/date'

const props = defineProps<{
  products: DashboardProduct[]
  loading: boolean
  failed: boolean
}>()

const recent = computed(() => recentProducts(props.products))
const { toDateTime } = useDateRepository()
</script>

<template>
  <VCard class="h-100">
    <div
      class="d-flex align-center justify-space-between ga-3 pa-4 pa-md-6 pb-md-2"
    >
      <h2 class="text-title-medium font-weight-bold">
        Recently added products
      </h2>
      <VBtn
        variant="text"
        size="small"
        :append-icon="mdiChevronRight"
        :to="{ name: 'product.list' }"
      >
        View all
      </VBtn>
    </div>
    <div class="px-2 px-md-4 pb-2">
      <LoadState :loading="loading" :failed="failed" section>
        <VList v-if="recent.length" bg-color="rgba(0, 0, 0, 0)" lines="two">
          <VListItem
            v-for="item in recent"
            :key="item.id"
            :to="{ name: 'product.edit', params: { id: item.id } }"
          >
            <template #prepend>
              <IdentityAvatar :name="item.name" class="me-3" />
            </template>
            <VListItemTitle class="font-weight-medium">{{
              item.name
            }}</VListItemTitle>
            <VListItemSubtitle>{{
              toDateTime(item.createdAt)
            }}</VListItemSubtitle>
            <template #append>
              <div class="text-end">
                <p class="text-body-medium font-weight-bold">
                  {{ item.salePrice.toLocaleString() }}
                </p>
                <p class="text-body-small text-medium-emphasis">
                  {{ item.quantity.toLocaleString() }} in stock
                </p>
              </div>
            </template>
          </VListItem>
        </VList>
        <EmptyState
          v-else
          title="No products yet"
          description="New products will appear here."
        />
      </LoadState>
    </div>
  </VCard>
</template>
