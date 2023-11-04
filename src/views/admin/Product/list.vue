<template>
  <title-layout>
    <template #default>
      <vq-table-filter :id="id">
        <title-row>
          <template #default>
            <v-col lg="3" md="3" sm="3" xs="12">
              <vq-text-field
                name="search"
                class="pa-2"
                variant="underlined"
                clearable
                hide-details
                label="Search"
              >
              </vq-text-field>
            </v-col>
            <v-col md="9" sm="9">
              <title-button>
                <v-btn color="secondary" :to="{ name: 'product.create' }">
                  Create Product <v-icon :icon="mdiPlus"> </v-icon>
                </v-btn>
              </title-button>
            </v-col>
          </template>
        </title-row>
      </vq-table-filter>
    </template>
  </title-layout>

  <v-container fluid>
    <v-card>
      <v-responsive>
        <VqDataTable :headers="headers" :id="id" action="product">
          <template #item="{ item, index }">
            <tr>
              <VqSerialNo :index="index" />
              <td>{{ item.name }}</td>
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
                <vq-btn
                  :to="{ name: 'product.edit', params: { id: item.id } }"
                ></vq-btn>
                <vq-datatable-item-action
                  action="product"
                  :item-id="item.id"
                ></vq-datatable-item-action>
              </td>
            </tr>
          </template>
        </VqDataTable>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { mdiPlus } from '@mdi/js'
import { collectVqHeaders, useVqDataTable } from '@qnx/vuetify'
import type { Product } from '@/types/product'
const id = 'product_list'

const VqDataTable = useVqDataTable<Product>()
const headers = collectVqHeaders([
  { title: 'Name', key: 'name' },
  { title: 'Price', key: 'price' },
  { title: 'Sale Price', key: 'salePrice' },
  { title: 'Status', sortable: false, key: 'status' },
  { title: 'Action', sortable: false, key: 'action' }
])
</script>
