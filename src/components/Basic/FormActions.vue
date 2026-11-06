<template>
  <v-divider />
  <div class="d-flex justify-end ga-2 pa-4 px-md-6">
    <v-btn v-if="!hideCancel" variant="text" @click="goBack">Cancel</v-btn>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { goBack } from '@/router/navigation'

defineProps<{ hideCancel?: boolean }>()
</script>
