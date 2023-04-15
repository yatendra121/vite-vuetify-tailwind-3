<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios'
import { defineAsyncComponent, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'

//types
import { ProductWithImage } from './types'

//components
const ProductForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "product" */ './form.vue')
)

const route = useRoute()

const { response, cancelLoading } = useAxiosWithLoading<ProductWithImage>(
  `product/${route.params.id}`,
  {
    method: 'GET'
  }
)

const id = 'product_form'

onBeforeUnmount(() => cancelLoading())
</script>
<template>
  <title-layout>
    <template #default>
      <title-row>
        <v-col>
          <title-button>
            <vq-submit-btn :id="id"></vq-submit-btn>
            <vq-back-btn></vq-back-btn>
          </title-button>
        </v-col>
      </title-row>
    </template>
  </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <ProductForm
          :id="id"
          :action="`product/${route.params.id}`"
          method="PUT"
          :initial-values="response?.data"
        />
      </v-responsive>
    </v-card>
  </v-container>
</template>
