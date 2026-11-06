<template>
  <div
    class="d-flex flex-column align-center justify-center text-center pa-6"
    style="min-height: 80vh"
  >
    <AppLogo class="mb-10" />
    <p class="text-display-large font-weight-bold text-primary">404</p>
    <h1 class="text-headline-small font-weight-bold mt-2">Page not found</h1>
    <p class="text-body-large text-medium-emphasis mt-2 mb-8">
      The page you're looking for doesn't exist or has moved.
    </p>
    <v-btn color="primary" size="large" :to="{ name: 'dashboard' }">
      Back to Dashboard
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import AppLogo from '@/components/Basic/AppLogo.vue'
</script>
