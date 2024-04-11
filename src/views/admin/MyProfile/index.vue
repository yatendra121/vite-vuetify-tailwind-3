<template>
  <v-container>
    <v-card>
      <v-row class="pa-4">
        <v-col md="4">
          <div class="d-flex align-center my-3 gap-2">
            <v-avatar size="80px">
              <v-img
                alt="Avatar"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
              ></v-img>
            </v-avatar>
            <div class="ma-2">
              <h6 class="text-h6">
                {{ profileStore.profile?.name }}
                <v-chip color="primary">
                  {{ toCapitalize(profileStore.profile?.role?.name) }}</v-chip
                >
              </h6>
              <span class="text-subtitle-2">{{
                profileStore.profile?.email
              }}</span>
            </div>
          </div>
        </v-col>
        <v-col md="4"></v-col>
        <v-col md="12">
          <v-tabs color="primary" v-model="tab" align-tabs="end">
            <v-tab :value="1">Update Profile</v-tab>
            <v-tab :value="2">Settings</v-tab>
            <!-- <v-tab :value="3">Abstract</v-tab> -->
          </v-tabs>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <v-window v-model="tab">
          <v-window-item :value="1">
            <MyProfileForm :initial-values="response?.data" /> </v-window-item
        ></v-window>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, defineAsyncComponent, ref } from 'vue'
import { useAxiosWithLoading } from '@/composables/axios'
import type { User } from '@/types'
import { useProfileStore } from '@/store/reactivity/profile'
import { useStringRepository } from '@/composables/string'

const MyProfileForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const tab = ref(1)

const { toCapitalize } = useStringRepository()
const profileStore = useProfileStore()

const { response, cancelLoading } = useAxiosWithLoading<User>(
  'my-profile/show',
  {
    method: 'GET'
  }
)
onBeforeUnmount(() => cancelLoading())
</script>
