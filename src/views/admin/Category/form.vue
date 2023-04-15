<script lang="ts">
import { defineComponent } from 'vue'

//composables
import {
  useFormSuccess,
  useFormError,
  useFormClientError
} from '@/composables/formResponse'
import { validationSchema } from './formSchema'
import { VqTextField, VqFileInput } from '@qnx/vuetify'

//types
import type { PropType } from 'vue'
import type { FormMethod } from '@/types'
import type { CategoryWithImage } from './types'

export default defineComponent({
  components: {
    VqTextField,
    VqFileInput
  },
  props: {
    id: {
      type: String,
      required: true
    },
    action: {
      type: String,
      default: () => 'category'
    },
    method: {
      type: String as PropType<FormMethod>,
      default: () => 'POST'
    },
    initialValues: {
      type: Object as PropType<CategoryWithImage>,
      default: () => undefined
    },
    valuesSchema: {
      type: Object,
      default: () => undefined
    }
  },
  setup() {
    return {
      useFormSuccess,
      validationSchema,
      useFormError,
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
    :form-data="true"
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
            <VqFileInput
              multiple
              name="images"
              label="Category Image"
              placeholder="Category Image"
            />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <v-row>
              <v-col
                md="2"
                sm="2"
                xs="6"
                v-for="image in initialValues?.images"
                :key="image.id"
              >
                <v-img
                  :src="image.path"
                  :lazy-src="image.thumbPath"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img> </v-col
            ></v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </vq-form>
</template>
