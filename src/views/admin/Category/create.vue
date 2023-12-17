<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const CategoryForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "category" */ './form.vue')
)

const id = 'category_form'
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
        <CategoryForm :id="id" />
      </v-responsive>
    </v-card>
  </v-container>
</template>
