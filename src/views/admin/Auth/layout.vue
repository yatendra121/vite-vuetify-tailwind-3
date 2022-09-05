<template>
  <v-layout>
    <v-row no-gutters :style="{ height: height + 'px', overflow: 'hidden' }">
      <v-col
        lg="7"
        xl="6"
        cols="12"
        class="bg-primary d-none d-md-flex align-center justify-center"
      >
        <v-container>
          <v-row justify="center">
            <v-col xl="5" cols="8">
              <div>
                <h2 class="text-h4 text-white font-weight-medium">
                  Elegant Design with unlimited features, built with love
                </h2>
                <h6
                  class="text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"
                >
                  Wrappixel helps developers to build organized and well-coded
                  admin dashboards full of beautiful and feature rich modules.
                </h6>
                <v-btn> Learn More </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col
        lg="5"
        xl="6"
        cols="12"
        class="d-flex align-center"
        :style="{ height: height + 60 + 'px', overflow: 'auto' }"
      >
        <v-container class="spacing-playground tw-pl-10 tw-pr-10" fluid>
          <slot></slot>
        </v-container>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { height } = useWindowSize()
</script>
