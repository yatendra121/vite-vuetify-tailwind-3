<template>
  <v-row no-gutters class="pa-4 pa-md-6">
    <v-col cols="12" lg="4" class="pe-lg-8 pb-4 pb-lg-0">
      <h2 class="text-title-medium font-weight-bold">{{ title }}</h2>
      <p v-if="description" class="text-body-medium text-medium-emphasis mt-1">
        {{ description }}
      </p>
    </v-col>
    <v-col cols="12" lg="8">
      <v-row density="compact">
        <slot />
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
defineProps<{ title: string; description?: string }>()
</script>
