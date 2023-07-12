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
                :items="['male', 'female']"
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
          <template #item="{ item }">
            <tr>
              <td>{{ item.columns.id }}</td>
              <td>{{ item.columns.name }}</td>
              <td>{{ item.columns.email }}</td>
              <td>{{ item.columns.address }}</td>
              <td>
                <vq-datatable-item-change-status
                  action="user/change-status"
                  :item-id="item.columns.id"
                  :item-value="item.columns.status"
                ></vq-datatable-item-change-status>
              </td>
              <td>
                <vq-btn
                  :to="{ name: 'user.edit', params: { id: item.columns.id } }"
                ></vq-btn>
                <vq-datatable-item-action
                  action="user"
                  :item-id="item.columns.id"
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
import { mdiCircleEditOutline, mdiPlus, mdiAccountConvert } from '@mdi/js'
import type { User } from '@/types'
import { useVqDataTable } from '@qnx/vuetify'
const id = 'user_data_table'

const VqDataTable = useVqDataTable<User>()

const headers = [
  {
    title: 'Id',
    sortable: false,
    key: 'id'
  },
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Address', key: 'address' },
  { title: 'Status', sortable: false, key: 'status' },
  { title: 'Action', sortable: false, key: 'action' }
]

defineExpose({
  mdiCircleEditOutline,
  mdiPlus,
  mdiAccountConvert
})
</script>
