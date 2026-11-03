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
    :values-schema="valuesSchema"
    :initial-values="initialValues"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <div class="pa-4 pa-md-6">
        <v-row>
          <v-col cols="12" sm="6">
            <VqTextField name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col cols="12" sm="6">
            <vq-text-field
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <vq-text-field
              name="mobileNo"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>
          <!-- <v-col cols="12" sm="4">
            <vq-checkbox
              name="membership"
              label="Membership"
              placeholder="Membership"
            />
          </v-col> -->

          <v-col cols="12" sm="4">
            <vq-autocomplete
              :items="items"
              name="gender"
              label="Gender"
              item-title="title"
              item-value="value"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <vq-autocomplete
              multiple
              item-title="title"
              item-value="id"
              action="role"
              name="roleUsers"
              label="Role"
            />
          </v-col>
                    <v-col cols="12" sm="4">
            <vq-date-picker name="dob" label="Date of Birth" />
          </v-col>
          <!-- <v-col cols="12" sm="4">
            <vq-color-picker
              id="color"
              name="color"
              label="Color"
              placeholder="Color"
            />
          </v-col> -->
          <!-- <v-col cols="12" sm="4">
            <vq-otp-input
              variant="filled"
              id="otp"
              name="otp"
              label="otp"
              placeholder="otp"
            />
          </v-col> -->
          <!-- <v-col cols="12" sm="4">
            <VqTimePicker
              variant="filled"
              id="time"
              name="time"
              label="Time "
            />
          </v-col> -->
          <v-col cols="12" class="d-flex justify-end">
            <vq-submit-btn></vq-submit-btn>
          </v-col>
        </v-row>
        <!-- <vq-file-input name="profile_image"></vq-file-input> -->
      </div>
    </template>
  </vq-form>
</template>
