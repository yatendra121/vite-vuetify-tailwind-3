<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const UserForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const id = 'user_form'
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
        <UserForm :id="id" />
      </v-responsive>
    </v-card>
  </v-container>
</template>
