<template>
  <v-avatar
    color="primary"
    variant="tonal"
    size="36"
    class="text-body-small font-weight-bold"
  >
    {{ getInitials(name) }}
  </v-avatar>
</template>

<script lang="ts" setup>
import { getInitials } from '@/composables/string'

defineProps<{ name: string }>()
</script>
