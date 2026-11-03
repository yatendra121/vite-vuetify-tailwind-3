<template>
  <footer class="d-flex flex-wrap justify-space-between ga-2 px-4 px-md-6 py-4 text-body-small text-medium-emphasis">
    <span>&copy; {{ new Date().getFullYear() }} {{ APP_NAME }}</span>
    <span>All rights reserved.</span>
  </footer>
</template>
<script lang="ts" setup>
import { APP_NAME } from '@/config/brand'
</script>
