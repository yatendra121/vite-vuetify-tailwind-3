<script lang="ts">
import { computed, defineComponent } from 'vue'

//composables
import {
  useFormSuccess,
  useFormError,
  useFormClientError
} from '@/composables/formResponse'
import { validationSchema } from './formSchema'
import { VqTextField } from '@qnx/vuetify'

//types
import type { PropType } from 'vue'
import type { FormMethod } from '@/types'
import type { ProductWithImage } from './types'

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
      default: () => 'product'
    },
    method: {
      type: String as PropType<FormMethod>,
      default: () => 'POST'
    },
    initialValues: {
      type: Object as PropType<ProductWithImage>,
      default: () => undefined
    },
    valuesSchema: {
      type: Object,
      default: () => undefined
    }
  },
  setup(props) {
    // `images` only holds new uploads. Saved images are shown below, and
    // sending them back would post each one as "[object Object]".
    const formValues = computed(() => {
      if (!props.initialValues) return undefined
      const { images: _savedImages, ...values } = props.initialValues
      return values
    })

    return {
      formValues,
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
    :initial-values="formValues"
    :form-data="true"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
    @submited-client-error="useFormClientError"
  >
    <template #default>
      <div class="pa-4 pa-md-6">
        <v-row density="compact">
          <v-col cols="12" sm="6">
            <vq-autocomplete
              item-title="name"
              item-value="id"
              action="category"
              name="categoryId"
              label="Category"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <VqTextField name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col cols="12" sm="4">
            <vq-text-field
              name="quantity"
              label="Quantity"
              placeholder="Quantity"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <vq-text-field name="price" label="Price" placeholder="Price" />
          </v-col>
          <v-col cols="12" sm="4">
            <vq-text-field
              name="salePrice"
              label="Sale Price"
              placeholder="Sale Price"
            />
          </v-col>

          <v-col cols="12">
            <vq-textarea
              name="description"
              label="Description"
              placeholder="Description"
            />
          </v-col>
          <v-col cols="12">
            <VqFileInput
              multiple
              name="images"
              label="Product Image"
              placeholder="Product Image"
            />
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col
                cols="6"
                sm="2"
                v-for="image in initialValues?.images"
                :key="image.id"
              >
                <v-img
                  :src="image.path"
                  :lazy-src="image.thumbPath"
                  aspect-ratio="1"
                  cover
                  class="bg-surface-variant rounded-lg"
                >
                  <template #placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="d-flex justify-end mt-2">
            <vq-submit-btn :form="id" :text="method === 'PUT' ? 'Save changes' : 'Create'"></vq-submit-btn>
          </v-col>
        </v-row>
      </div>
    </template>
  </vq-form>
</template>
