<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VqTextField } from '@qnx/vuetify'

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
  components: {
    VqTextField
  },
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
    },
    valuesSchema: {
      type: Object,
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
    :id="id"
    :action="action"
    :method="method"
    :validation-schema="validationSchema"
    :values-schema="valuesSchema"
    :initial-values="initialValues"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <FormSection title="Personal details" description="Who this person is and how to reach them.">
        <v-col cols="12" sm="6">
          <VqTextField name="name" label="Name" placeholder="Name" />
        </v-col>
        <v-col cols="12" sm="6">
          <vq-text-field id="email" name="email" label="Email" placeholder="Email" />
        </v-col>
        <v-col cols="12" sm="6">
          <vq-text-field name="mobileNo" label="Mobile" placeholder="Mobile" />
        </v-col>
        <v-col cols="12" sm="6">
          <vq-autocomplete
            :items="items"
            name="gender"
            label="Gender"
            item-title="title"
            item-value="value"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vq-date-picker name="dob" label="Date of Birth" />
        </v-col>
      </FormSection>
      <v-divider />
      <FormSection title="Access" description="Roles decide what this person can do.">
        <v-col cols="12">
          <vq-autocomplete
            multiple
            item-title="title"
            item-value="id"
            action="role"
            name="roleUsers"
            label="Role"
          />
        </v-col>
      </FormSection>
      <FormActions>
        <vq-submit-btn :text="method === 'PUT' ? 'Save changes' : 'Create'"></vq-submit-btn>
      </FormActions>
    </template>
  </vq-form>
</template>
