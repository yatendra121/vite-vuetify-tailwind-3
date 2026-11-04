<template>
  <v-row no-gutters class="auth-layout">
    <v-col
      cols="12"
      md="6"
      class="bg-brand d-none d-md-flex flex-column justify-space-between pa-12"
    >
      <AppLogo inverted />

      <div style="max-width: 480px">
        <p class="text-headline-medium font-weight-bold mb-4">
          Run your gym from one place
        </p>
        <p class="text-body-large" style="opacity: 0.9">
          Manage organizations, members and day-to-day operations from a single
          dashboard.
        </p>
      </div>

      <p class="text-body-small mb-0">
        &copy; {{ new Date().getFullYear() }} {{ APP_NAME }}
      </p>
    </v-col>

    <v-col cols="12" md="6" class="d-flex align-center justify-center pa-6">
      <div class="w-100" style="max-width: 400px">
        <AppLogo class="d-md-none mb-8" />
        <slot></slot>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import AppLogo from '@/components/Basic/AppLogo.vue'
import { APP_NAME } from '@/config/brand'
</script>

<style scoped>
.auth-layout {
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
