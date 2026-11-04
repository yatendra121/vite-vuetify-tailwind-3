<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios'
import { defineAsyncComponent, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

//types
import { CategoryWithImage } from './types'

//components
const CategoryForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "category" */ './form.vue')
)

const route = useRoute()

const { response, loading, failed, cancelLoading } = useAxiosWithLoading<CategoryWithImage>(
  `category/${route.params.id}`,
  {
    method: 'GET'
  }
)

const id = 'category_form'

onBeforeUnmount(() => cancelLoading())
</script>
<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card class="form-card">
    <LoadState :loading="loading" :failed="failed">
    <CategoryForm
        :id="id"
        :action="`category/${route.params.id}`"
        method="PUT"
        :initial-values="response?.data"
      />
    </LoadState>
  </v-card>
</template>
