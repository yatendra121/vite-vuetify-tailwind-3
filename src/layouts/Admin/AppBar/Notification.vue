<template>
  <v-navigation-drawer
    :model-value="modelValue"
    location="right"
    width="340"
    temporary
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div class="d-flex align-center justify-space-between pa-4">
      <h2 class="text-title-medium font-weight-bold">Notifications</h2>
      <v-btn
        :icon="mdiClose"
        variant="text"
        size="small"
        aria-label="Close notifications"
        @click="$emit('update:modelValue', false)"
      />
    </div>
    <v-divider />
    <EmptyState
      :icon="mdiBellOutline"
      title="You're all caught up"
      description="New notifications will appear here."
    />
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { mdiBellOutline, mdiClose } from '@mdi/js'

defineProps<{ modelValue: boolean }>()
defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>
