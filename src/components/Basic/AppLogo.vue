<template>
  <div class="d-flex align-center ga-3">
    <v-avatar
      color="accent"
      rounded="lg"
      size="36"
      :aria-label="iconOnly ? APP_NAME : undefined"
    >
      <v-icon :icon="mdiStorefrontOutline" size="22" />
    </v-avatar>
    <span
      v-if="!iconOnly"
      class="text-title-medium font-weight-bold text-no-wrap"
    >
      {{ APP_NAME }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { mdiStorefrontOutline } from '@mdi/js'
import { APP_NAME } from '@/config/brand'

defineProps<{ iconOnly?: boolean }>()
</script>
