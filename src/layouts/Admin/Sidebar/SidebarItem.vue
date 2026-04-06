<template>
  <v-list-group
    v-if="item.children && getChildren(item).length > 1"
    :collapse-icon="mdiChevronUp"
    :expand-icon="mdiChevronDown"
    class="sidebar-group"
  >
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :title="item.meta.title"
        :height="height"
        :color="color"
        variant="flat"
        rounded="lg"
        link
      >
        <template #prepend>
          <v-icon :size="iconSize" :icon="item.meta.icon" class="me-2" />
        </template>
      </v-list-item>
    </template>

    <div class="sidebar-group__children">
      <sidebar-item
        v-for="sidebarItem in getChildren(item)"
        :key="sidebarItem.name"
        :item="sidebarItem"
      />
    </div>
  </v-list-group>

  <v-list-item
    v-else-if="aItem && !aItem.meta?.hidden"
    :to="{ name: aItem.name }"
    :color="color"
    :height="height"
    variant="flat"
    rounded="lg"
    link
    :title="aItem.meta.title"
  >
    <template #prepend>
      <v-icon :size="iconSize" :icon="aItem.meta.icon" class="me-2" />
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
    const height = ref(44)
    const iconSize = ref(22)
    const color = ref('primary')

    const getChildren = (val: any) =>
      val.children?.filter((item: any) => item?.meta?.hidden !== true) ?? []

    const aItem = computed(() => {
      const children = getChildren(props.item)
      return children.length ? children[0] : props.item
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
@use 'vuetify/settings' as v;

@layer overrides {
  .v-list-group {
    --list-indent-size: 0px;
    --prepend-width: 22px;
  }

  .v-list-item--nav .v-list-item-title {
    font-size: 0.9rem;
  }

  .sidebar-group__children .v-list-item {
    padding-inline-start: 24px !important;
  }
}

.sidebar-group__children {
  position: relative;
  padding-left: 8px;

  &::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 4px;
    bottom: 4px;
    width: 1px;
    background-color: rgba(var(--v-theme-primary), 0.2);
    border-radius: 1px;
  }
}
</style>
