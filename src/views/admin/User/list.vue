<template>
  <title-layout> </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <vq-list>
          <template #default="{ items, ...option }">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">User Id</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Gender</th>
                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.gender }}</td>
                  <td>
                    <v-btn
                      color="primary"
                      :icon="mdiAccount"
                      size="small"
                    ></v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>

            <!-- <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.name }}</v-list-item-title>

              <v-list-item-subtitle>
                {{ item.email }}
              </v-list-item-subtitle>
            </v-list-item> -->

            <v-sheet
              class="mt-auto align-center justify-center d-flex px-2 pa-2 ma-2"
              color="grey lighten-6"
            >
              <load-more-btn v-bind="option"> </load-more-btn
            ></v-sheet>
          </template>
        </vq-list>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { mdiAccount } from '@mdi/js'
</script>
