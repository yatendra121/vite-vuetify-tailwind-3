<template>
  <title-layout></title-layout>
  <v-card>
    <LoadState :loading="loading" :failed="failed">
      <StaticPageForm :initial-values="response?.data" />
    </LoadState>
  </v-card>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onBeforeUnmount } from 'vue'
import { useAxiosWithLoading } from '@/composables/axios'
import { useRoute } from 'vue-router'
import { StaticPage } from '@/types'
const StaticPageForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "static-page" */ './Form.vue')
)

const route = useRoute()
const { response, loading, failed, cancelLoading } =
  useAxiosWithLoading<StaticPage>(`static-page/${route.meta.key}`, {
    method: 'GET'
  })

onBeforeUnmount(() => cancelLoading())
</script>
