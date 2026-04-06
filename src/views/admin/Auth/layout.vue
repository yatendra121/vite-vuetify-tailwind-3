<template>
  <v-layout>
    <v-row no-gutters class="h-screen">
      <v-col
        lg="7"
        xl="6"
        cols="12"
        class="auth-left bg-primary d-none d-lg-flex align-center justify-center"
      >
        <v-container>
          <v-row justify="center">
            <v-col xl="7" cols="9">
              <!-- Logo -->
              <div class="d-flex align-center ga-2 mb-8">
                <v-icon size="32" color="white">mdi-hexagon-multiple</v-icon>
                <span class="text-subtitle-1 text-white">Vuetify<strong>Admin</strong></span>
              </div>

              <!-- Headline -->
              <h2 class="text-h4 text-white font-weight-bold mb-4" style="line-height: 1.25; letter-spacing: -0.5px">
                Elegant design with unlimited features, built with love
              </h2>
              <p class="text-body-1 text-white mb-8" style="opacity: 0.85">
                Build organized and well-coded admin dashboards full of beautiful,
                feature-rich modules — all in one place.
              </p>

              <!-- Stats -->
              <v-row no-gutters class="mb-8">
                <v-col v-for="stat in stats" :key="stat.label" cols="4">
                  <div class="text-h5 font-weight-bold text-white">{{ stat.value }}</div>
                  <div class="text-caption text-white" style="opacity: 0.7; text-transform: uppercase; letter-spacing: 0.5px">{{ stat.label }}</div>
                </v-col>
              </v-row>

              <v-btn variant="outlined" color="white" rounded="lg">
                Learn More
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col lg="5" xl="6" cols="12" class="d-flex flex-column align-center justify-center">
        <v-container fluid style="max-width: 420px">
          <slot></slot>

          <v-divider class="my-6">
            <span class="text-caption text-medium-emphasis px-2">or continue with</span>
          </v-divider>

          <div class="d-flex justify-center ga-3">
            <v-btn variant="outlined" color="primary" size="large" icon>
              <v-icon>{{ mdiFacebook }}</v-icon>
            </v-btn>
            <v-btn variant="outlined" color="primary" size="large" icon>
              <v-icon>{{ mdiGooglePlus }}</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts" setup>
import { mdiFacebook, mdiGooglePlus } from '@mdi/js'

const stats = [
  { value: '50+', label: 'Components' },
  { value: '10+', label: 'Layouts' },
  { value: '99%', label: 'Satisfaction' }
]
</script>

<style lang="scss" scoped>
@use 'vuetify/settings' as v;

.auth-left {
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    top: -80px;
    right: -80px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
    bottom: 40px;
    left: -60px;
  }
}
</style>
