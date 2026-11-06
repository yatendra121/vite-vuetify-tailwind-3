<template>
  <nav class="d-flex flex-wrap align-center ga-1 px-4" aria-label="Main navigation">
    <v-menu v-for="section in sections" :key="section.title" location="bottom start">
      <template #activator="{ props }">
        <v-btn v-bind="props" variant="text" size="small" :append-icon="mdiChevronDown">
          {{ section.title }}
        </v-btn>
      </template>
      <v-card min-width="220" class="mt-1">
        <v-list nav density="compact">
          <sidebar-item
            v-for="route in section.routes"
            :key="route.path"
            :item="route"
          />
        </v-list>
      </v-card>
    </v-menu>
  </nav>
</template>

<script lang="ts" setup>
import { mdiChevronDown } from '@mdi/js'
import SidebarItem from '../Sidebar/SidebarItem.vue'
import { useNavSections } from '../useNavSections'

const sections = useNavSections()
</script>
