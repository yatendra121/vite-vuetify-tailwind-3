<template>
  <!-- Concentric rings: the app's decorative motif on ink surfaces. -->
  <div
    class="position-absolute opacity-20"
    aria-hidden="true"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <v-progress-circular
      v-for="ring in rings"
      :key="ring.scale"
      class="position-absolute"
      color="accent"
      :model-value="ring.value"
      :rotate="ring.rotate"
      :size="size * ring.scale"
      :width="size * 0.05"
      :style="{ inset: `${(size * (1 - ring.scale)) / 2}px` }"
    />
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ size?: number }>(), { size: 320 })

const rings = [
  { scale: 1, value: 72, rotate: 200 },
  { scale: 0.74, value: 58, rotate: 120 },
  { scale: 0.48, value: 84, rotate: 20 }
]
</script>
