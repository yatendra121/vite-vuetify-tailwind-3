<template>
  <title-layout>
    <template #default>
      <vq-table-filter :id="id">
        <title-row>
          <template #default>
            <v-col lg="3" md="3" sm="4" xs="12">
              <vq-autocomplete
                class="pa-2"
                variant="underlined"
                clearable
                hide-details
                label="Gender"
                name="gender"
                item-title="title"
                item-value="value"
                :items="[
                  { title: 'Male', value: 'male' },
                  { title: 'Female', value: 'female' }
                ]"
              ></vq-autocomplete>
            </v-col>
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
            <v-col md="6" sm="5">
              <title-button>
                <v-btn color="secondary" :to="{ name: 'user.create' }">
                  Create User <v-icon :icon="mdiPlus"> </v-icon>
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
        <VqDataTable :headers="headers" :id="id" action="user">
          <template #item="{ item, index }">
            <tr>
              <VqSerialNo :index="index" />
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ toCapitalize(item.gender ?? '') }}</td>
              <td>{{ toDateTime(item.createdAt) }}</td>
              <td>
                <vq-datatable-item-change-status
                  action="user/change-status"
                  :item-id="item.id"
                  :item-value="item.status"
                ></vq-datatable-item-change-status>
              </td>
              <td>
                <vq-btn
                  :to="{ name: 'user.edit', params: { id: item.id } }"
                ></vq-btn>
                <vq-datatable-item-action
                  action="user"
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
import { useVqDataTable, VqSerialNo, collectVqHeaders } from '@qnx/vuetify'
import { useDateRepository } from '@/composables/date'
import { useStringRepository } from '@/composables/string'

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
  { title: 'Action', sortable: false, key: 'action' }
])

const { toDateTime } = useDateRepository()
const { toCapitalize } = useStringRepository()
</script>
