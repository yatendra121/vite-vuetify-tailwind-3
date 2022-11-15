<template>
  <v-row no-gutters style="margin-top: -16px; margin-bottom: -16px">
    <slot></slot>
  </v-row>
</template>
<script lang="ts" setup>
const props = defineProps({
  align: {
    type: String,
    default: 'end'
  }
})
</script>
