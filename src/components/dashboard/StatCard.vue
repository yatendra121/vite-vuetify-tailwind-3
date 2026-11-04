<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

// `value` is null until it has loaded, or if it couldn't be loaded.
defineProps<{
  title: string
  icon: string
  color: string
  value: number | null
  loading: boolean
  to: RouteLocationRaw
}>()
</script>

<template>
  <VCard class="h-100" :to="to" hover>
    <VCardText class="d-flex align-center ga-4 pa-5">
      <VAvatar :color="color" variant="tonal" rounded="lg" size="48">
        <VIcon :icon="icon" />
      </VAvatar>
      <div>
        <p class="text-body-medium text-medium-emphasis">{{ title }}</p>
        <VSkeletonLoader v-if="loading" type="text" width="64" />
        <p v-else class="text-headline-medium font-weight-bold">
          {{ value === null ? '—' : value.toLocaleString() }}
        </p>
      </div>
    </VCardText>
  </VCard>
</template>
