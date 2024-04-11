<script lang="ts">
import { defineComponent, ref } from 'vue'

//composables
import {
  useFormSuccessOnlyMessage,
  useFormError,
  useFormClientError
} from '@/composables/formResponse'
import { validationSchema } from './formSchema'

//types
import type { PropType } from 'vue'
import type { FormMethod, InitialValues } from '@/types'

export default defineComponent({
  props: {
    action: {
      type: String,
      default: () => 'user'
    },
    method: {
      type: String as PropType<FormMethod>,
      default: () => 'POST'
    },
    initialValues: {
      type: Object as PropType<InitialValues>,
      default: () => undefined
    }
  },
  setup() {
    const items = ref([
      { title: 'Male', value: 'male' },
      { title: 'Female', value: 'female' }
    ])

    return {
      useFormSuccessOnlyMessage,
      validationSchema,
      useFormError,
      items,
      useFormClientError
    }
  }
})
</script>

<template>
  <vq-form
    id="my_profile_form"
    action="my-profile"
    method="PUT"
    :validation-schema="validationSchema"
    :initial-values="initialValues"
    @submited-success="useFormSuccessOnlyMessage"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <v-container>
        <v-row>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field
              name="mobileNo"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>

          <v-col md="4" sm="4" xs="12">
            <vq-text-field name="email" label="Email" placeholder="Email" />
          </v-col>

          <v-col md="12" sm="12" xs="12">
            <vq-textarea name="address" label="Address" placeholder="Address" />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <vq-submit-btn></vq-submit-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </vq-form>
</template>
