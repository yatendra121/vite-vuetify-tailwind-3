<template>
  <v-layout>
    <v-container fluid>
      <v-card :rounded="true" :elevation="1" min-height="70">
        <v-row class="flex-child" align="center">
          <v-col
            class="d-flex"
            cols="auto"
            sm="4"
            xs="12"
            align-self="center"
            offset="1"
          >
            <h2 class="tw-text-center">{{ $route.meta.heading }}</h2>
          </v-col>
          <v-col class="d-flex" cols="auto" sm="6" xs="12" align-self="center">
            <slot />
          </v-col>
        </v-row>
      </v-card>
      <v-progress-linear
        absolute
        bottom
        height="3"
        :active="loadingValue"
        :indeterminate="true"
        color="primary"
      ></v-progress-linear>
    </v-container>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'

export default defineComponent({
  name: 'TitleLayout',
  setup() {
    const appStore = useAppStore()

    return {
      loadingValue: computed(() => appStore.loadingValue)
    }
  }
})
</script>
