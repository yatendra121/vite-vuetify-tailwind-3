<template>
  <v-bottom-navigation
    :active="mobile"
    v-model="navigationVal"
    :bg-color="colorVal"
    mode="shift"
  >
    <v-btn :to="{ name: 'dashboard' }">
      <v-icon :icon="mdiHome"></v-icon>
      <span> Home </span>
    </v-btn>

    <v-btn :to="{ name: 'my-profile' }">
      <v-icon :icon="mdiAccountCircle"></v-icon>
      <span> My Profile </span>
    </v-btn>

    <v-btn :to="{ name: 'category.list' }">
      <v-icon :icon="mdiShape"></v-icon>
      <span> Categories </span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { mdiHome, mdiAccountCircle, mdiShape } from '@mdi/js'
import { computed, ref } from 'vue'

const { mobile } = useDisplay()
const navigationVal = ref(0)
const colorVal = computed(() => {
  switch (navigationVal.value) {
    case 0:
      return 'primary'
    case 1:
      return 'secondary'
    case 2:
      return 'info'
    case 3:
      return 'warning'
    default:
      return 'error'
  }
})
</script>
