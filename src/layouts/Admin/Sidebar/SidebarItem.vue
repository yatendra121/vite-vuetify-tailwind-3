<template>
  <v-list-group
    v-if="item.children && getChildren(item).length > 1"
    :collapse-icon="mdiChevronUp"
    :expand-icon="mdiChevronDown"
  >
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :title="item.meta.title"
        :height="height"
        :color="color"
        link
      >
        <template #prepend>
          <v-icon :size="iconSize" :icon="item.meta.icon"></v-icon>
        </template>
      </v-list-item>
    </template>
    <sidebar-item
      v-for="sidebarItem in item.children"
      :key="sidebarItem.name"
      :item="sidebarItem"
      :height="height"
      :color="color"
    />
  </v-list-group>

  <v-list-item
    v-else-if="aItem && !aItem.meta?.hidden"
    :to="{ name: aItem.name }"
    :color="color"
    :height="height"
    variant="flat"
    link
    :title="aItem.meta.title"
  >
    <template #prepend>
      <v-icon :size="iconSize" :icon="aItem.meta.icon"></v-icon>
    </template>
  </v-list-item>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const height = ref(45)
    const iconSize = ref(25)
    const color = ref('primary')
    const getChildren = (val: any) => {
      return (
        val.children?.filter((item: any) => item?.meta?.hidden !== true) ?? []
      )
    }

    const aItem = computed(() => {
      const children = getChildren(props.item)
      const item = children && children.length ? children[0] : props.item
      return item
    })
    return {
      aItem,
      getChildren,
      height,
      iconSize,
      color,
      mdiChevronUp,
      mdiChevronDown
    }
  }
})
</script>
<style lang="scss">
$list-item-title-font-size: 1rem;

.v-list-item--nav .v-list-item-title {
  font-size: $list-item-title-font-size;
}
.v-list-group {
  --list-indent-size: 0px !important;
  --prepend-width: 25px !important;
}

.v-list-item__prepend > .v-icon {
  margin-inline-end: 10px;
}
</style>
