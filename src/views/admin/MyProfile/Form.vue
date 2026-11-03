<script lang="ts">
import { defineComponent, ref } from 'vue'

//composables
import {
  useFormSuccessOnlyMessage,
  useFormError,
  useFormClientError
} from '@/composables/formResponse'
import { validationSchema } from './formSchema'
import { VqFileUpload } from '@qnx/vuetify'

//types
import type { PropType } from 'vue'
import type { FormMethod, InitialValues } from '@/types'

export default defineComponent({
  components: {
    VqFileUpload
  },
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
    :form-data="true"
    :validation-schema="validationSchema"
    :initial-values="initialValues"
    @submited-success="useFormSuccessOnlyMessage"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <div class="pa-4 pa-md-6">
        <v-row>
          <v-col cols="12" sm="4">
            <vq-text-field name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col cols="12" sm="4">
            <vq-text-field
              name="mobileNo"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>

          <v-col cols="12" sm="4">
            <vq-text-field name="email" label="Email" placeholder="Email" />
          </v-col>

          <v-col cols="12">
            <VqFileUpload
              density="compact"
              clearable
              show-size
              name="test"
              label="Attachment"
              placeholder="Attachment"
            />
          </v-col>

          <v-col cols="12">
            <vq-textarea name="address" label="Address" placeholder="Address" />
          </v-col>
          <v-col cols="12" class="d-flex justify-end">
            <vq-submit-btn></vq-submit-btn>
          </v-col>
        </v-row>
      </div>
    </template>
  </vq-form>
</template>
