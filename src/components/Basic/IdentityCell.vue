<template>
  <div class="d-flex align-center ga-3">
    <IdentityAvatar :name="name" />
    <span class="cell-truncate font-weight-medium" :title="name">{{ name }}</span>
  </div>
</template>

<script lang="ts" setup>
import IdentityAvatar from './IdentityAvatar.vue'

defineProps<{ name: string }>()
</script>
