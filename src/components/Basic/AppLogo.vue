<template>
  <div class="d-flex align-center ga-2">
    <v-avatar :color="inverted ? 'white' : 'primary'" rounded="lg" size="32">
      <v-icon :color="inverted ? 'primary' : 'on-primary'" :icon="mdiDumbbell" size="20" />
    </v-avatar>
    <span class="text-title-medium font-weight-bold text-no-wrap">{{ APP_NAME }}</span>
  </div>
</template>

<script lang="ts" setup>
import { mdiDumbbell } from '@mdi/js'
import { APP_NAME } from '@/config/brand'

defineProps<{ inverted?: boolean }>()
</script>
