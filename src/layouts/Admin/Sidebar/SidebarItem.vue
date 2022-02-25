<template>
  <v-list-group v-if="item.children">
    <template #header="props">
      <v-list-item
        v-bind="props"
        :prepend-icon="item.meta.icon"
        :title="item.meta.title"
      />
    </template>
    <sidebar-item
      v-for="sidebarItem in item.children"
      :key="sidebarItem.name"
      :item="sidebarItem"
    />
  </v-list-group>
  <v-list-item
    v-else
    :prepend-icon="item.meta.icon"
    :to="{ name: item.name }"
    link
    :title="item.meta.title"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {}
  }
})
</script>
