<template>
  <v-layout>
    <v-container fluid>
      <v-card :rounded="true" :elevation="1" min-height="70">
        <v-responsive>
          <v-row class="tw-p-5">
            <v-col
              class="d-flex justify-center"
              cols="auto"
              md="3"
              sm="3"
              xs="12"
            >
              <span class="tw-text-center text-h6">{{
                $route.meta.heading
              }}</span>
            </v-col>
            <v-col class="d-flex justify-end" cols="auto" md="9" sm="9" xs="12">
              <slot />
              <slot name="button"></slot>
            </v-col>
          </v-row>
        </v-responsive>
        <v-progress-linear
          absolute
          bottom
          height="2"
          :active="loadingValue"
          :indeterminate="true"
          color="primary"
        ></v-progress-linear>
      </v-card>
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
