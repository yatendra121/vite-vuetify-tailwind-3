<template>
  <Sidebar />
  <AppBar />
  <v-main>
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
</script>
