<script setup lang="ts">
interface Props {
  title: string
  color?: string
  icon: string
  stats: number
  change: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary'
})

const isPositive = true
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center">
      <VAvatar
        size="44"
        rounded
        :color="props.color"
        variant="tonal"
        class="me-4"
      >
        <VIcon :icon="props.icon" size="30" />
      </VAvatar>

      <div>
        <span class="text-body-small">{{ props.title }}</span>
        <div class="d-flex align-center flex-wrap">
          <span class="text-title-large font-weight-semibold">{{ props.stats }}</span>
          <div
            v-if="props.change"
            :class="`${isPositive ? 'text-success' : 'text-error'} mt-1`"
          >
            <VIcon :icon="isPositive ? 'bx-chevron-up' : 'bx-chevron-down'" />
            <span class="text-body-small font-weight-semibold"
              >{{ Math.abs(props.change) }}%</span
            >
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
