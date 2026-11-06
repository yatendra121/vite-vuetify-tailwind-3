<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios'
import { useRoute } from 'vue-router'

//types
import { CategoryWithImage } from './types'
import CategoryForm from './form.vue'

const route = useRoute()

const { response, loading, failed } = useAxiosWithLoading<CategoryWithImage>(
  `category/${route.params.id}`,
  {
    method: 'GET'
  }
)

const id = 'category_form'
</script>
<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card>
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
