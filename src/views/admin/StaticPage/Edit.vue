<template>
  <title-layout>
    <template #default> </template>
    <template #button>
      <vq-submit-btn></vq-submit-btn>
      <vq-back-btn></vq-back-btn>
    </template>
  </title-layout>
  <v-container fluid>
    <v-row class="flex-child">
      <v-col class="d-flex" cols="12" md="12">
        <v-sheet
          :rounded="true"
          :elevation="1"
          style="width: 100%; height: 100%"
          class="mx-auto"
        >
          <v-responsive>
            <div class="text-center">
              <v-progress-circular
                :size="42"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
            <Form :initial-values="response?.data" />
          </v-responsive>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { syncRefLoading } from '@/composables/loading'
import { useAxios } from '@/composables/axios'
import { useRoute } from 'vue-router'
const Form = defineAsyncComponent(
  () => import(/* webpackChunkName: "static-page" */ './Form.vue')
)
export default defineComponent({
  components: {
    Form
  },
  setup() {
    const route = useRoute()
    const { response, loading } = useAxios(`static-page/${route.meta.key}`, {
      method: 'GET'
    })

    syncRefLoading(loading)

    return {
      response
    }
  }
})
</script>
