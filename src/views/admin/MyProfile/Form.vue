<template>
  <vq-form
    id="form"
    action="my-profile"
    method="PUT"
    :initial-values="initialValues"
    :validation-schema="schema"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
  >
    <v-container>
      <v-row>
        <v-col>
          <vq-text-field
            :clearable="true"
            name="first_name"
            label="First Name"
            placeholder="First Name"
          />
        </v-col>
        <v-col>
          <vq-text-field
            :clearable="true"
            name="last_name"
            label="Last Name"
            placeholder="Last Name"
          />
        </v-col>
        <v-col>
          <vq-text-field
            :clearable="true"
            name="email"
            label="Email"
            placeholder="Email"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <vq-text-field
            :clearable="true"
            name="mobile_no"
            label="Mobile"
            placeholder="Mobile"
          />
        </v-col>
        <v-col>
          <vq-text-field
            name="dob"
            label="Date of Birth"
            placeholder="Date of Birth"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <vq-text-editor name="address" />
        </v-col>
      </v-row>
      <v-row>
        <v-col> </v-col>
      </v-row>
      <!-- <vq-file-input name="profile_image"></vq-file-input> -->
    </v-container>
  </vq-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as yup from 'yup'
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
      email: yup.string().required().nullable().max(50).label('Email'),
      first_name: yup
        .string()
        .required()
        .nullable()
        .max(30)
        .label('First Name'),
      last_name: yup.string().required().nullable().max(30).label('Last Name')
      // mobile_no: yup.string().required().max(30).label('Mobile')
    })

    return {
      useFormSuccess,
      schema,
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
