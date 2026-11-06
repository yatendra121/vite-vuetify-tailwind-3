<template>
  <v-row no-gutters class="auth-layout">
    <v-col cols="12" md="6" lg="5" class="d-none d-md-block">
      <v-sheet
        color="ink"
        theme="dark"
        class="position-relative overflow-hidden h-100 d-flex flex-column justify-space-between pa-12"
      >
        <BrandRings :size="420" style="right: -170px; bottom: -190px" />

        <AppLogo />

        <div class="position-relative" style="max-width: 480px">
          <p class="text-display-small font-weight-bold mb-8">
            Run your store from <span class="text-accent">one place.</span>
          </p>
          <div
            v-for="feature in features"
            :key="feature"
            class="d-flex align-center ga-3 mb-3"
          >
            <v-avatar color="accent" size="24">
              <v-icon :icon="mdiCheck" size="16" />
            </v-avatar>
            <span class="text-body-large">{{ feature }}</span>
          </div>
        </div>

        <p class="text-body-small mb-0 position-relative">
          &copy; {{ new Date().getFullYear() }} {{ APP_NAME }}
        </p>
      </v-sheet>
    </v-col>

    <v-col cols="12" md="6" lg="7" class="d-flex align-center justify-center pa-6">
      <div class="w-100" style="max-width: 420px">
        <AppLogo class="d-md-none mb-8" />
        <slot></slot>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { mdiCheck } from '@mdi/js'
import BrandRings from '@/components/Basic/BrandRings.vue'
import AppLogo from '@/components/Basic/AppLogo.vue'
import { APP_NAME } from '@/config/brand'

const features = [
  'Manage products and categories',
  'Control users, admins and roles',
  'Keep your store pages up to date'
]
</script>

<style scoped>
.auth-layout {
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
