<template>
  <title-layout></title-layout>
  <v-card class="form-card">
    <LoadState :loading="loading" :failed="failed">
      <StaticPageForm :initial-values="response?.data" />
    </LoadState>
  </v-card>
</template>
<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios'
import { useRoute } from 'vue-router'
import { StaticPage } from '@/types'
import StaticPageForm from './Form.vue'

const route = useRoute()
const { response, loading, failed } =
  useAxiosWithLoading<StaticPage>(`static-page/${route.meta.key}`, {
    method: 'GET'
  })
</script>
