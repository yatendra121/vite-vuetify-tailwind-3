<template>
  <vq-text-field
    :type="visible ? 'text' : 'password'"
    :clearable="false"
    autocomplete="current-password"
  >
    <template #append-inner>
      <v-btn
        :icon="visible ? mdiEyeOffOutline : mdiEyeOutline"
        :aria-label="visible ? 'Hide password' : 'Show password'"
        variant="text"
        size="small"
        density="comfortable"
        @click="visible = !visible"
      />
    </template>
  </vq-text-field>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'

const visible = ref(false)
</script>
