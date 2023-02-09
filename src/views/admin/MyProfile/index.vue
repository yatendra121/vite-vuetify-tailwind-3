<template>
  <title-layout>
    <template #default>
      <title-row>
        <v-col>
          <title-button>
            <vq-submit-btn :id="id"></vq-submit-btn>
          </title-button>
        </v-col>
      </title-row>
    </template>
  </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <MyProfileForm :id="id" :initial-values="response?.data" />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, defineAsyncComponent } from 'vue'
import { useAxiosWithLoading } from '@/composables/axios'
import type { User } from '@/types'

const MyProfileForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const { response, cancelLoading } = useAxiosWithLoading<User>(
  'my-profile/show',
  {
    method: 'GET'
  }
)
onBeforeUnmount(() => cancelLoading())

const id = 'my_profile_form'
</script>
