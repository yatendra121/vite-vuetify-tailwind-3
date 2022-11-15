<template>
  <title-layout>
    <template #default>
      <title-row>
        <v-col md="12" sm="12">
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
        <StaticPageForm :initial-values="response?.data" />
      </v-responsive>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { syncRefLoading } from '@/composables/loading'
import { useAxios } from '@/composables/axios'
import { useRoute } from 'vue-router'
import { StaticPage } from '@/types'
const StaticPageForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "static-page" */ './Form.vue')
)

const route = useRoute()
const { response, loading } = useAxios<StaticPage>(
  `static-page/${route.meta.key}`,
  {
    method: 'GET'
  }
)

syncRefLoading(loading)
</script>
