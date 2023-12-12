<script lang="ts" generic="T">
import { defineComponent } from 'vue'

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
            <vq-autocomplete
              item-title="name"
              item-value="id"
              action="category"
              name="categoryId"
              label="Category"
            />
          </v-col>
          <v-col md="6" sm="6" xs="12">
            <VqTextField name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field
              name="quantity"
              label="Quantity"
              placeholder="Quantity"
            />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field name="price" label="Price" placeholder="Price" />
          </v-col>
          <v-col md="4" sm="4" xs="12">
            <vq-text-field
              name="salePrice"
              label="Sale Price"
              placeholder="Sale Price"
            />
          </v-col>

          <v-col md="12" sm="12" xs="12">
            <vq-textarea
              name="description"
              label="Description"
              placeholder="Description"
            />
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <VqFileInput
              multiple
              name="images"
              label="Product Image"
              placeholder="Product Image"
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
                  <template #placeholder>
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
                </v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12" sm="12" xs="12">
            <vq-submit-btn :form="id"></vq-submit-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </vq-form>
</template>
