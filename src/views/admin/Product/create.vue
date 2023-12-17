<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const ProductForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "product" */ './form.vue')
)

const id = 'product_form'
</script>

<template>
  <title-layout>
    <template #default>
      <title-row>
        <v-col md="12" sm="12">
          <title-button>
            <!-- <vq-submit-btn :id="id"></vq-submit-btn> -->
            <vq-back-btn></vq-back-btn>
          </title-button>
        </v-col>
      </title-row>
    </template>
  </title-layout>

  <v-container fluid>
    <v-card>
      <v-responsive>
        <ProductForm :id="id" />
      </v-responsive>
    </v-card>
  </v-container>
</template>
