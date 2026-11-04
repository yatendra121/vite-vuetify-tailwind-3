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
      <img
        width="40"
        height="40"
        :src="props.image"
        alt=""
        class="d-block mb-4"
      />

      <p
        class="text-body-small text-medium-emphasis mb-1 text-uppercase font-weight-medium"
        style="letter-spacing: 0.5px"
      >
        {{ props.title }}
      </p>
      <p class="text-headline-small font-weight-bold mb-2">{{ props.stats }}</p>
      <VChip
        size="small"
        :color="isPositive ? 'success' : 'error'"
        variant="tonal"
        class="font-weight-medium"
      >
        <VIcon
          start
          size="14"
          :icon="isPositive ? mdiTrendingUp : mdiTrendingDown"
        />
        {{ isPositive ? '+' : '' }}{{ props.change }}%
      </VChip>
    </VCardText>
  </VCard>
</template>
