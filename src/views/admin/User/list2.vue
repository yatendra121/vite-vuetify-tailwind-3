<template>
  <title-layout>
    <v-btn color="primary" :prepend-icon="mdiPlus" :to="{ name: 'user.create' }">
      Create User
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
        <vq-autocomplete
          name="gender"
          label="Gender"
          clearable
          hide-details
          :items="[
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' }
          ]"
          item-title="title"
          item-value="value"
        ></vq-autocomplete>
      </div>
    </vq-table-filter>
    <v-divider />
    <VqDataTable :headers="headers" :id="id" action="user">
      <template #item="{ item, index }">
          <tr>
            <VqSerialNo :index="index + 1" />
            <td><span class="cell-truncate" :title="item.name">{{ item.name }}</span></td>
            <td><span class="cell-truncate" :title="item.email">{{ item.email }}</span></td>
            <td>{{ toCapitalize(item.gender ?? '') }}</td>
            <td>{{ toDateTime(item.createdAt) }}</td>
            <td>
              <VqDatatableItemChangeStatus
                action="user/change-status"
                :item-id="item.id"
                :item-value="item.status"
              ></VqDatatableItemChangeStatus>
            </td>
            <td>
              <div class="d-flex align-center ga-1">
                <vq-btn
                :to="{ name: 'user.edit', params: { id: item.id } }"
              ></vq-btn>
              <vq-datatable-delete-action
                action="user"
                :item-id="item.id"
              ></vq-datatable-delete-action>
              </div>
            </td>
          </tr>
        </template>
      <template #no-data>
        <EmptyState />
      </template>
    </VqDataTable>
  </v-card>
</template>

<script lang="ts" setup>
import { mdiMagnify, mdiPlus } from '@mdi/js'
import { useVqDataTable, VqSerialNo, collectVqHeaders } from '@qnx/vuetify'
import { useDateRepository } from '@/composables/date'
import { useStringRepository } from '@/composables/string'
import VqDatatableItemChangeStatus from '@/components/Vuetify/VqDatatableItemChangeStatus'

//types
import type { User } from '@/types'

const id = 'user_data_table'
const VqDataTable = useVqDataTable<User>()
const headers = collectVqHeaders([
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Gender', key: 'gender' },
  { title: 'Created At', key: 'createdAt' },
  { title: 'Status', sortable: false, key: 'status' },
  { title: 'Actions', sortable: false, key: 'action' }
])

const { toDateTime } = useDateRepository()
const { toCapitalize } = useStringRepository()
</script>
