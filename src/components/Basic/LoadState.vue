<template>
  <v-skeleton-loader v-if="loading" type="article, actions" />
  <EmptyState
    v-else-if="failed"
    :icon="mdiAlertCircleOutline"
    :title="
      section ? 'Could not load this section' : 'Could not load this page'
    "
    description="Check your connection and try again."
  >
    <v-btn color="primary" variant="tonal" class="mt-2" @click="reload">
      Try again
    </v-btn>
  </EmptyState>
  <slot v-else />
</template>

<script lang="ts" setup>
import { mdiAlertCircleOutline } from '@mdi/js'
import EmptyState from './EmptyState.vue'

defineProps<{ loading: boolean; failed: boolean; section?: boolean }>()

const reload = () => window.location.reload()
</script>
