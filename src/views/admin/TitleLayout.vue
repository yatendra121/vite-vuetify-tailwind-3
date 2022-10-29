<template>
  <v-layout>
    <v-container fluid>
      <v-card :rounded="true" :elevation="1">
        <v-row
          no-gutters
          justify="space-between"
          style="min-height: 70px"
          class="pa-5"
        >
          <v-col align-self="center" cols="auto" md="3" sm="3" xs="12">
            <span class="tw-text-center text-h6">{{
              $route.meta.heading
            }}</span>
          </v-col>
          <v-col
            align-self="center"
            class="d-flex justify-end"
            cols="auto"
            md="9"
            sm="9"
            xs="12"
          >
            <slot />
            <div class="d-flex justify-end" style="gap: 0.35rem">
              <slot name="button"></slot>
            </div>
            <div id="form_submit_button"></div>
          </v-col>
        </v-row>
      </v-card>
      <v-progress-linear
        absolute
        bottom
        height="2"
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
