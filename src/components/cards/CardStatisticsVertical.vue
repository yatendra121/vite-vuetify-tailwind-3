<script setup lang="ts">
import { controlledComputed } from '@vueuse/core'

interface Props {
  title: string
  image: string
  stats: string
  change: number
}

const props = defineProps<Props>()

const isPositive = controlledComputed(
  () => props.change,
  () => Math.sign(props.change) === 1
)
</script>

<template>
  <VCard>
    <VCardText class="pa-5">
      <div class="d-flex align-center justify-space-between mb-4">
        <img width="40" height="40" :src="props.image" alt="stat icon" />
        <VChip
          size="small"
          :color="isPositive ? 'success' : 'error'"
          variant="tonal"
          class="font-weight-medium"
        >
          <VIcon start size="14" :icon="isPositive ? 'mdi-trending-up' : 'mdi-trending-down'" />
          {{ isPositive ? '+' : '' }}{{ props.change }}%
        </VChip>
      </div>

      <p class="text-caption text-medium-emphasis mb-1 text-uppercase font-weight-medium" style="letter-spacing: 0.5px">
        {{ props.title }}
      </p>
      <h5 class="text-h5 font-weight-bold">{{ props.stats }}</h5>
    </VCardText>
  </VCard>
</template>
