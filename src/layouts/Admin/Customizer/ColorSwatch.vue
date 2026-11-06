<template>
  <v-menu :close-on-content-click="false" location="start">
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        class="px-1"
        rounded="lg"
        :title="label"
        :aria-label="`Change ${label} color, currently ${color}`"
      >
        <template #prepend>
          <v-avatar :color="color" size="28" class="border me-3" />
        </template>
        <template #append>
          <code class="text-body-small text-medium-emphasis">{{ color }}</code>
        </template>
      </v-list-item>
    </template>
    <v-color-picker
      :model-value="color"
      mode="hex"
      :modes="['hex']"
      elevation="4"
      @update:model-value="change(String($event))"
    />
  </v-menu>
</template>

<script lang="ts" setup>
import { useThrottleFn } from '@vueuse/core'

defineProps<{ label: string; color: string }>()
const emit = defineEmits<{ change: [color: string] }>()

// Each change rebuilds the theme's stylesheet, which a drag would do constantly.
const change = useThrottleFn((color: string) => emit('change', color), 80, true)
</script>
