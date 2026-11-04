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
      @update:model-value="$emit('change', String($event))"
    />
  </v-menu>
</template>

<script lang="ts" setup>
defineProps<{ label: string; color: string }>()
defineEmits<{ change: [color: string] }>()
</script>
