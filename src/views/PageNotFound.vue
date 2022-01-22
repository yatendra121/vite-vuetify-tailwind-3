<template>
  <v-layout :full-height="true">
    <v-container fluid>
      <v-hover v-slot="{ hover, props }" open-delay="0">
        <v-card
          :elevation="hover ? 24 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="500"
          max-width="500"
          v-bind="props"
        >
          <img
            position="absolute"
            height="500"
            width="500"
            contained
            src="@/assets/404-illustration.svg"
            alt="Logo"
          />
        </v-card>
      </v-hover>
      <!-- <v-hover v-slot="{ hover }" open-delay="200">
        <v-sheet height="200" elevation="10">
          <img contain src="@/assets/404-illustration.svg" alt="Logo" />
        </v-sheet>
      </v-hover> -->
    </v-container>
  </v-layout>
</template>
<script setup lang="ts">
//import Image from './src/assets/404-illustration.svg'
</script>