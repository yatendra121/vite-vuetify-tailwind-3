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
    :action="action"
    :method="method"
    :values-schema="valuesSchema"
    :initial-values="initialValues"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <v-container>
        <v-row>
          <v-col md="6" sm="6" xs="12">
            <VqTextField name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col md="6" sm="6" xs="12">
            <vq-text-field
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
            />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field
              name="mobileNo"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>
          <!-- <v-col md="4" sm="4" xs="12">
            <vq-checkbox
              name="membership"
              label="Membership"
              placeholder="Membership"
            />
          </v-col> -->

          <v-col md="4" sm="4" xs="12">
            <vq-autocomplete
              :items="items"
              name="gender"
              label="Gender"
              item-title="title"
              item-value="value"
            />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-autocomplete
              multiple
              item-title="title"
              item-value="id"
              action="role"
              name="roleUsers"
              label="Role"
            />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <!-- <vq-textarea name="address" label="Address" placeholder="Address" /> -->

            <!-- <v-col md="12" sm="12" xs="12" v-for="i in 2" :key="i">
              <vq-textarea
                :name="`address[${i - 1}].name`"
                label="Address"
                placeholder="Address"
              />
            </v-col> -->
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-date-picker
              id="dob"
              name="dob"
              label="Date of Birth"
              placeholder="Date of Birth"
            />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-color-picker
              id="color"
              name="color"
              label="Color"
              placeholder="Color"
            />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-otp-input
              variant="filled"
              id="otp"
              name="otp"
              label="otp"
              placeholder="otp"
            />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <vq-submit-btn></vq-submit-btn>
          </v-col>
        </v-row>
        <!-- <vq-file-input name="profile_image"></vq-file-input> -->
      </v-container>
    </template>
  </vq-form>
</template>
