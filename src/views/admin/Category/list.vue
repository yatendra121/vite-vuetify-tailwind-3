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
                <v-btn color="secondary" :to="{ name: 'category.create' }">
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
        <VqList density="compact" action="category" :id="id" :page-size="10">
          <template #default="{ items }">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Id</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody v-if="items.length">
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <vq-datatable-item-change-status
                      action="category/change-status"
                      :item-id="item.id"
                      :item-value="item.status"
                    ></vq-datatable-item-change-status>
                  </td>
                  <td>
                    <vq-btn
                      :to="{ name: 'category.edit', params: { id: item.id } }"
                    ></vq-btn>
                    <vq-datatable-item-action
                      action="category"
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
import { useVqList } from '@qnx/vuetify'
import type { Category } from '@/types/category'
const id = 'category_list'

const VqList = useVqList<Category>()

defineExpose({
  mdiCircleEditOutline,
  mdiPlus,
  mdiAccountConvert
})
</script>
