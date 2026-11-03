<script setup lang="ts">
import { controlledComputed } from '@vueuse/core'
import { mdiTrendingDown, mdiTrendingUp } from '@mdi/js'

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
  <VCard class="h-100">
    <VCardText class="pa-5">
      <div class="d-flex align-center justify-space-between mb-4">
        <img width="40" height="40" :src="props.image" alt="stat icon" />
        <VChip
          size="small"
          :color="isPositive ? 'success' : 'error'"
          variant="tonal"
          class="font-weight-medium"
        >
          <VIcon start size="14" :icon="isPositive ? mdiTrendingUp : mdiTrendingDown" />
          {{ isPositive ? '+' : '' }}{{ props.change }}%
        </VChip>
      </div>

      <p class="text-body-small text-medium-emphasis mb-1 text-uppercase font-weight-medium" style="letter-spacing: 0.5px">
        {{ props.title }}
      </p>
      <h5 class="text-headline-small font-weight-bold">{{ props.stats }}</h5>
    </VCardText>
  </VCard>
</template>
