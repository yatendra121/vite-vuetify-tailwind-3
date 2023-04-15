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

const { response, cancelLoading } = useAxiosWithLoading<CategoryWithImage>(
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
        <CategoryForm
          :id="id"
          :action="`category/${route.params.id}`"
          method="PUT"
          :initial-values="response?.data"
        />
      </v-responsive>
    </v-card>
  </v-container>
</template>
