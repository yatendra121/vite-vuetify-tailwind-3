<script setup>
import { ref } from 'vue'
import { toRefs } from '@vueuse/core'
import { useDrauu } from '@vueuse/integrations'
import Scrubber from './Scrubber.vue'

const target = ref()
const { undo, redo, canUndo, canRedo, brush } = useDrauu(target)
const { color, size } = toRefs(brush)
</script>

<template>
  <v-container>
    <v-row class="flex-child">
      <v-col class="d-flex" cols="12" md="12">
        <v-sheet
          :rounded="true"
          :elevation="10"
          class="mx-auto"
          min-width="900"
          min-height="350"
        >
          <Scrubber v-model="size" w="full" :min="1" :max="10" />
          <svg style="height: 100%; width: 100%" ref="target"></svg>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
