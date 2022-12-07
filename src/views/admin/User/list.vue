<template>
  <title-layout>
    <template #default>
      <vq-table-filter id="user_list">
        <title-row>
          <template #default>
            <v-col lg="3" md="3" sm="4" xs="12">
              <vq-autocomplete
                class="pa-2"
                variant="underlined"
                clearable
                hide-details
                label="Category"
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
        <vq-list action="user" id="user_list">
          <template #default="{ items, ...option }: SlotProps">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">User Id</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Gender</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody v-if="items.length">
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.gender }}</td>
                  <td>{{ item.status }}</td>
                  <td>
                    <vq-datatable-item-action
                      :item-id="item.id"
                      id="user_list"
                    ></vq-datatable-item-action>
                    <vq-datatable-item-action
                      :item-id="item.id"
                      id="user_list"
                      title="Delete"
                    ></vq-datatable-item-action>

                    <v-btn
                      variant="text"
                      :to="{ name: 'user.edit', params: { id: item.id } }"
                      color="primary"
                      :icon="mdiCircleEditOutline"
                    ></v-btn>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td>No record founds.</td>
                </tr>
              </tbody>
            </v-table>
            <v-sheet
              class="mt-auto align-center justify-center d-flex px-2 pa-2 ma-2"
              color="grey lighten-6"
            >
              <vq-list-load-more-btn v-bind="option"> </vq-list-load-more-btn>
            </v-sheet>
          </template>
        </vq-list>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import type { User } from '@/types'
import { mdiCircleEditOutline, mdiPlus } from '@mdi/js'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SlotProps {
  items: User[]
  loadMore: () => void
  finished: boolean
  loading: boolean
}
defineExpose({
  mdiCircleEditOutline,
  mdiPlus
})
</script>
