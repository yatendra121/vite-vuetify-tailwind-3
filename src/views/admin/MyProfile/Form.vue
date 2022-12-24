<script lang="ts">
import { defineComponent, ref } from 'vue'

//composables
import {
  useFormSuccess,
  useFormError,
  useFormClientError
} from '@/composables/formResponse'
import { validationSchema } from './formSchema'

//types
import type { PropType } from 'vue'
import type { FormMethod, InitialValues } from '@/types'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
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
      useFormSuccess,
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
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <v-container>
        <v-row>
          <v-col md="6" sm="6" xs="12">
            <vq-text-field
              id="name"
              name="name"
              label="Name"
              placeholder="Name"
            />
          </v-col>

          <v-col md="6" sm="6" xs="12">
            <vq-text-field
              id="mobileNo"
              name="mobileNo"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>
          <v-col md="6" sm="6" xs="12">
            <vq-text-field
              id="dob"
              name="dob"
              label="Date of Birth"
              placeholder="Date of Birth"
            />
          </v-col>
          <v-col md="6" sm="6" xs="12">
            <vq-autocomplete
              id="gender"
              :items="items"
              name="gender"
              label="Gender"
            />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <vq-textarea name="address" label="Address" placeholder="Address" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </vq-form>
</template>
