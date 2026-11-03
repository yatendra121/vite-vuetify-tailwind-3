<template>
  <v-bottom-navigation v-if="mobile" color="primary" grow>
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

const { mobile } = useDisplay()
</script>
