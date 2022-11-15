<template>
  <vq-form
    id="form"
    :action="action"
    :method="method"
    :validation-schema="schema"
    :values-schema="valuesSchema"
    :initial-values="initialValues"
    @submited-success="useFormSuccess"
    @submitedError="useFormError"
  >
    <template #default>
      <v-container>
        <v-row>
          <v-col md="6" sm="6" xs="12">
            <vq-text-field name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col md="6" sm="6" xs="12">
            <vq-text-field name="email" label="Email" placeholder="Email" />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field
              name="mobileNo"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field
              name="dob"
              label="Date of Birth"
              placeholder="Date of Birth"
            />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-autocomplete :items="items" name="gender" label="Gender" />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-autocomplete
              multiple
              item-title="title"
              item-value="id"
              action="role"
              name="roleIds"
              label="Role"
            />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <vq-textarea name="address" label="Address" placeholder="Address" />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <vq-submit-btn><h1>231412412</h1></vq-submit-btn>
          </v-col>
        </v-row>
        <!-- <vq-file-input name="profile_image"></vq-file-input> -->
      </v-container>
    </template>
    <template #test>
      <h1>2213124</h1>
    </template>
  </vq-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as yup from 'yup'
import { useFormSuccess, useFormError } from '@/composables/formResponse'

import type { PropType } from 'vue'
import type { InitialValues } from '@/types'

export default defineComponent({
  props: {
    action: {
      type: String,
      default: () => 'user'
    },
    method: {
      type: String,
      default: () => 'POST'
    },
    initialValues: {
      type: Object as PropType<InitialValues | null>,
      default: () => undefined
    },
    valuesSchema: {
      type: Object,
      default: () => undefined
    }
  },
  setup() {
    const schema = yup.object({
      name: yup.string().required().max(30).label('Name'),
      email: yup.string().required().max(50).label('Email'),
      mobileNo: yup.string().nullable().max(50).label('Mobile number'),
      dob: yup.string().nullable().max(50).label('DOB'),
      gender: yup.string().nullable().label('Gender'),
      roleIds: yup.array().required().min(1).label('Roles')
    })

    const items = ref([
      { title: 'Male', value: 'male' },
      { title: 'Female', value: 'female' }
    ])

    return {
      useFormSuccess,
      schema,
      useFormError,
      items
    }
  }
})
</script>
