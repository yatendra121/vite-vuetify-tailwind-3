<template>
  <v-responsive>
    <v-container fluid>
      <v-card :rounded="true" :elevation="1">
        <v-row style="min-height: 70px" class="pa-5" align-self="center">
          <v-col align-self="center" md="3" sm="3" xs="12">
            <span class="tw-text-center text-h6">{{
              $route.meta.heading
            }}</span>
          </v-col>
          <v-col md="9" sm="9" xs="12">
            <slot />
            <!-- <v-col>
                <slot name="button"></slot>
              </v-col> -->

            <!-- <div id="form_submit_button"></div> -->
          </v-col>
        </v-row>
      </v-card>
      <v-progress-linear
        height="2"
        :active="loadingValue"
        :indeterminate="true"
        color="primary"
      ></v-progress-linear>
    </v-container>
  </v-responsive>
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
