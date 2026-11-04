<template>
  <a class="skip-link" href="#main-content" @click.prevent="skipToContent">
    Skip to content
  </a>
  <Sidebar />
  <AppBar />
  <v-main id="main-content" tabindex="-1">
    <v-container fluid class="pa-4 pa-md-6">
      <slot />
    </v-container>
    <BottomBar />
  </v-main>
  <BottomNavigation />
</template>
<script lang="ts" setup>
import AppBar from './AppBar/index.vue'
import BottomBar from './Bottom/index.vue'
import BottomNavigation from './Bottom/BottomNavigation.vue'
import Sidebar from './Sidebar/index.vue'

const skipToContent = () => document.getElementById('main-content')?.focus()
</script>
