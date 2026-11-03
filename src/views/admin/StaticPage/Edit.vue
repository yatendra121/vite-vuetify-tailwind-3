<template>
  <title-layout></title-layout>
  <v-card>
    <StaticPageForm :initial-values="response?.data" />
  </v-card>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { syncRefLoading } from '@/composables/loading'
import { useAxios } from '@qnx/composables/axios'
import { useRoute } from 'vue-router'
import { StaticPage } from '@/types'
import type { ApiSuccessResponseValue } from '@qnx/composables'
const StaticPageForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "static-page" */ './Form.vue')
)

const route = useRoute()
const { response, loading } = useAxios<ApiSuccessResponseValue<StaticPage>>(
  `static-page/${route.meta.key}`,
  {
    method: 'GET'
  }
)

syncRefLoading(loading)
</script>
