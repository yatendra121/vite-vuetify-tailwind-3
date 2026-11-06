<template>
  <title-layout>
    <v-btn color="primary" :prepend-icon="mdiPlus" :to="{ name: 'product.create' }">
      Create Product
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
    <VqDataTable :headers="headers" :id="id" action="product">
      <template #item="{ item, index }">
          <tr>
            <VqSerialNo :index="index + 1" />
            <td><IdentityCell :name="item.name" /></td>
            <td>{{ item.price }}</td>
            <td>{{ item.salePrice }}</td>
            <td>
              <vq-datatable-item-change-status
                action="product/change-status"
                :item-id="item.id"
                :item-value="item.status"
              ></vq-datatable-item-change-status>
            </td>
            <td>
              <div class="d-flex align-center ga-1">
                <vq-btn
                :to="{ name: 'product.edit', params: { id: item.id } }"
              ></vq-btn>
              <vq-datatable-delete-action
                action="product"
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
import { collectVqHeaders, useVqDataTable } from '@qnx/vuetify'
import type { Product } from '@/types/product'
const id = 'product_list'

const VqDataTable = useVqDataTable<Product>()
const headers = collectVqHeaders([
  { title: 'Name', key: 'name' },
  { title: 'Price', key: 'price' },
  { title: 'Sale Price', key: 'salePrice' },
  { title: 'Status', sortable: false, key: 'status' },
  { title: 'Actions', sortable: false, key: 'action' }
])
</script>
