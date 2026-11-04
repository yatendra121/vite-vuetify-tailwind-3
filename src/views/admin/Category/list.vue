<template>
  <title-layout>
    <v-btn color="primary" :prepend-icon="mdiPlus" :to="{ name: 'category.create' }">
      Create Category
    </v-btn>
  </title-layout>

  <v-card>
    <vq-table-filter :id="id">
      <div class="table-filters">
        <vq-text-field
          name="search"
          label="Search"
          clearable
          hide-details
          :prepend-inner-icon="mdiMagnify"
        ></vq-text-field>
      </div>
    </vq-table-filter>
    <v-divider />
    <VqDataTable :headers="headers" :id="id" action="category">
      <template #item="{ item, index }">
          <tr>
            <VqSerialNo :index="index + 1" />
            <td><span class="cell-truncate" :title="item.name">{{ item.name }}</span></td>
            <td>
              <vq-datatable-item-change-status
                action="category/change-status"
                :item-id="item.id"
                :item-value="item.status"
              ></vq-datatable-item-change-status>
            </td>
            <td>
              <div class="d-flex align-center ga-1">
                <vq-btn
                :to="{ name: 'category.edit', params: { id: item.id } }"
              ></vq-btn>
              <vq-datatable-delete-action
                action="category"
                :item-id="item.id"
              ></vq-datatable-delete-action>
              </div>
            </td>
          </tr>
        </template>
      <template #loading>
        <v-skeleton-loader type="table-row@5" />
      </template>
      <template #no-data>
        <EmptyState />
      </template>
    </VqDataTable>
  </v-card>
</template>

<script lang="ts" setup>
import { mdiMagnify, mdiPlus } from '@mdi/js'
import { useVqDataTable, collectVqHeaders, VqSerialNo } from '@qnx/vuetify'
import type { Category } from '@/types/category'
const id = 'category_list'

const VqDataTable = useVqDataTable<Category>()

const headers = collectVqHeaders([
  { title: 'Name', key: 'name' },
  { title: 'Status', sortable: false, key: 'status' },
  { title: 'Actions', sortable: false, key: 'action' }
])
</script>
