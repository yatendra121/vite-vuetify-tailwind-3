<template>
  <vq-form
    id="form"
    :action="`static-page/${route.meta.key}`"
    method="PUT"
    :initial-values="initialValues"
    :validation-schema="schema"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
  >
    <v-container class="grey lighten-5">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col>
          <vq-text-field name="title" label="Title" placeholder="Title" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <vq-text-editor name="description" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-btn color="primary" type="submit">Submit</v-btn> -->
  </vq-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as yup from 'yup'
import { useRoute } from 'vue-router'
import { useFormSuccess, useFormError } from '@/composables/formResponse'

import type { propType } from 'vue'
import type { InitialValues } from '@/types'

export default defineComponent({
  props: {
    initialValues: {
      type: Object as propType<InitialValues>,
      default: () => undefined
    }
  },
  setup() {
    const schema = yup.object({
      title: yup.string().required().max(50).label('Email'),
      description: yup.string().required().max(30).label('Name')
    })

    const route = useRoute()

    return {
      schema,
      route,
      useFormSuccess,
      useFormError
    }
  }
})
</script>
<style scoped>
form {
  width: 100%;
}
</style>
