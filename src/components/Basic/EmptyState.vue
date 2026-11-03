<template>
  <div class="d-flex flex-column align-center text-center ga-2 pa-8">
    <v-avatar color="primary" variant="tonal" size="56">
      <v-icon :icon="icon" size="28" />
    </v-avatar>
    <p class="text-title-medium font-weight-medium mb-0">{{ title }}</p>
    <p v-if="description" class="text-body-medium text-medium-emphasis mb-0">
      {{ description }}
    </p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { mdiInboxOutline } from '@mdi/js'

withDefaults(
  defineProps<{ title?: string; description?: string; icon?: string }>(),
  {
    title: 'No records found',
    description: 'Try changing your filters, or add a new record.',
    icon: mdiInboxOutline
  }
)
</script>
