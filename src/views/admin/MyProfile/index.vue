<template>
  <title-layout>
    <template #default>
      <title-row>
        <v-col>
          <title-button>
            <vq-submit-btn></vq-submit-btn>
          </title-button>
        </v-col>
      </title-row>
    </template>
  </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <MyProfileForm :initial-values="response?.data" />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, defineAsyncComponent } from 'vue'
import { useAxios } from '@/composables/axios'
import { syncRefLoading } from '@/composables/loading'
const MyProfileForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const { response, loading, cancel } = useAxios('my-profile/show', {
  method: 'GET'
})

syncRefLoading(loading)

onBeforeUnmount(() => cancel())
</script>
