<template>
  <vq-text-field
    :type="visible ? 'text' : 'password'"
    :append-inner-icon="visible ? mdiEyeOffOutline : mdiEyeOutline"
    :clearable="false"
    autocomplete="current-password"
    @click:append-inner="visible = !visible"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'

const visible = ref(false)
</script>
