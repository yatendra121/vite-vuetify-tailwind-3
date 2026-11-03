<template>
  <title-layout>
    <v-btn color="primary" :prepend-icon="mdiPlus" :to="{ name: 'user.create' }">
      Create User
    </v-btn>
  </title-layout>

  <v-card>
    <vq-table-filter :id="id">
      <div class="table-filters">
        <vq-text-field name="search" label="Search" clearable hide-details></vq-text-field>
        <vq-autocomplete
          name="gender"
          label="Gender"
          clearable
          hide-details
          :items="['male', 'female']"
        ></vq-autocomplete>
      </div>
    </vq-table-filter>
    <v-divider />
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
                    <!-- <vq-datatable-delete-action
                      :id="id"
                      :item-id="item.id"
                      :icon="mdiAccountConvert"
                      method="PUT"
                      title="Change Status"
                      hint-title="Change status"
                    ></vq-datatable-delete-action> -->

                    <vq-btn
                      :to="{ name: 'user.edit', params: { id: item.id } }"
                    ></vq-btn>
                    <vq-datatable-delete-action
                      action="user"
                      :item-id="item.id"
                    ></vq-datatable-delete-action>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="6"><EmptyState /></td>
                </tr>
              </tbody>
            </v-table>
            <v-sheet
              class="mt-auto align-center justify-center d-flex px-2 pa-2 ma-2"
              
            >
              <vq-list-load-more-btn> </vq-list-load-more-btn>
            </v-sheet>
          </template>
        </VqList>
  </v-card>
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
