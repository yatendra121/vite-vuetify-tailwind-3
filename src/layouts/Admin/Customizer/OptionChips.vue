<template>
  <div class="mb-4">
    <p class="text-body-small font-weight-medium mb-1">{{ label }}</p>
    <!-- Fixed look, so the panel stays usable whatever variants are chosen. -->
    <v-chip-group
      :model-value="modelValue"
      mandatory
      column
      filter
      variant="outlined"
      selected-class="bg-primary"
      :aria-label="label"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <v-chip
        v-for="option in options"
        :key="String(option.value)"
        :value="option.value"
        size="small"
      >
        {{ option.title }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  modelValue: unknown
  options: { title: string; value: unknown }[]
}>()
defineEmits<{ 'update:modelValue': [value: any] }>()
</script>
