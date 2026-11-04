<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

//types
import { ProductWithImage } from './types'
import ProductForm from './form.vue'

const route = useRoute()

const { response, loading, failed } = useAxiosWithLoading<ProductWithImage>(
  `product/${route.params.id}`,
  {
    method: 'GET'
  }
)

const formId = 'product_form'
</script>
<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card class="form-card">
    <LoadState :loading="loading" :failed="failed">
    <ProductForm
        :id="formId"
        :action="`product/${route.params.id}`"
        method="PUT"
        :initial-values="response?.data"
      />
    </LoadState>
  </v-card>
</template>
