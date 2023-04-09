<script lang="ts">
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
      default: () => 'product'
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
        </v-row>
      </v-container>
    </template>
  </vq-form>
</template>
