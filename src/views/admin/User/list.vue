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
        <VqList density="compact" action="user" :id="id" :page-size="10">
          <template #default="{ items }">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Id</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Address</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody v-if="items.length">
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.address }}</td>
                  <td>
                    <vq-datatable-item-change-status
                      action="user/change-status"
                      :item-id="item.id"
                      :item-value="item.status"
                    ></vq-datatable-item-change-status>
                  </td>
                  <td>
                    <!-- <vq-datatable-item-action
                      :id="id"
                      :item-id="item.id"
                      :icon="mdiAccountConvert"
                      method="PUT"
                      title="Change Status"
                      hint-title="Change status"
                    ></vq-datatable-item-action> -->

                    <vq-btn
                      :to="{ name: 'user.edit', params: { id: item.id } }"
                    ></vq-btn>
                    <vq-datatable-item-action
                      action="user"
                      :item-id="item.id"
                    ></vq-datatable-item-action>
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
              <vq-list-load-more-btn> </vq-list-load-more-btn>
            </v-sheet>
          </template>
        </VqList>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { mdiCircleEditOutline, mdiPlus, mdiAccountConvert } from '@mdi/js'
import type { User } from '@/types'
import { useVqList } from '@qnx/vuetify'
const id = 'user_list'

const VqList = useVqList<User>()

defineExpose({
  mdiCircleEditOutline,
  mdiPlus,
  mdiAccountConvert
})
</script>
