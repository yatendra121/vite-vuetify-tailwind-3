<template>
  <footer class="px-4 px-md-6">
    <v-divider />
    <p class="text-body-small text-medium-emphasis text-center py-3">
      &copy; {{ new Date().getFullYear() }} {{ APP_NAME }}. All rights reserved.
    </p>
  </footer>
</template>
<script lang="ts" setup>
import { APP_NAME } from '@/config/brand'
</script>
