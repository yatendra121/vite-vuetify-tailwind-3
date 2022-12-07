<template>
  <v-list-group
    v-if="item.children"
    :collapse-icon="mdiChevronUp"
    :expand-icon="mdiChevronDown"
  >
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :prepend-icon="item.meta.icon"
        :title="item.meta.title"
        :height="height"
        :active-color="activeColor"
        link
      />
    </template>
    <sidebar-item
      v-for="sidebarItem in item.children"
      :key="sidebarItem.name"
      :item="sidebarItem"
      :height="height"
      :active-color="activeColor"
      link
    />
  </v-list-group>

  <v-list-item
    v-if="!item.children && !item.meta.hidden"
    :prepend-icon="item.meta.icon"
    :to="{ name: item.name }"
    :active-color="activeColor"
    :height="height"
    link
    variant="flat"
    :title="item.meta.title"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  setup() {
    const height = ref(45)
    const activeColor = ref('primary')
    return { height, activeColor, mdiChevronUp, mdiChevronDown }
  }
})
</script>
