<script lang="ts">
import { defineComponent } from 'vue'

//composables
import {
  useFormSuccessOnlyMessage,
  useFormError,
  useFormClientError
} from '@/composables/formResponse'
import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'
import { validationSchema } from './formSchema'
import { VqFileUpload } from '@qnx/vuetify'

//types
import type { PropType } from 'vue'
import type { ApiResponse } from '@qnx/composables'
import type { InitialValues } from '@/types'

export default defineComponent({
  components: {
    VqFileUpload
  },
  props: {
    initialValues: {
      type: Object as PropType<InitialValues>,
      default: () => undefined
    }
  },
  setup() {
    const { myProfile } = useAuthProfileRepository()

    // The app bar and profile header read the signed-in user from the store.
    const onSaved = (response: ApiResponse<unknown>) => {
      useFormSuccessOnlyMessage(response)
      myProfile().catch(() => {})
    }

    return {
      onSaved,
      validationSchema,
      useFormError,
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
    @submited-success="onSaved"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <div class="pa-4 pa-md-6">
        <v-row density="compact">
          <v-col cols="12" sm="6">
            <vq-text-field name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col cols="12" sm="6">
            <vq-text-field
              name="mobileNo"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>

          <v-col cols="12">
            <vq-text-field name="email" label="Email" placeholder="Email" />
          </v-col>

          <v-col cols="12">
            <p class="text-body-medium font-weight-medium mb-2">Attachment</p>
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
          <v-col cols="12" class="d-flex justify-end mt-2">
            <vq-submit-btn text="Save changes"></vq-submit-btn>
          </v-col>
        </v-row>
      </div>
    </template>
  </vq-form>
</template>
