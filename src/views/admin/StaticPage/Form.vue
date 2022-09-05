<template>
  <vq-form
    id="form"
    :action="`static-page/${route.meta.key}`"
    method="PUT"
    :initial-values="initialValues"
    :validation-schema="schema"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
  >
    <v-container class="grey lighten-5">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col>
          <vq-text-field name="title" label="Title" placeholder="Title" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <vq-text-editor :is-dark="sidebar" name="description" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-btn color="primary" type="submit">Submit</v-btn> -->
  </vq-form>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import * as yup from 'yup'
import { useRoute } from 'vue-router'
import { useFormSuccess, useFormError } from '@/composables/formResponse'
import { useAppStore } from '@/store/reactivity/app'
import { requiredField } from '@qnx/api-messages'

import type { PropType } from 'vue'
import type { InitialValues } from '@/types'

export default defineComponent({
  props: {
    initialValues: {
      type: Object as PropType<InitialValues>,
      default: () => undefined
    }
  },
  setup() {
    const appStore = useAppStore()

    const schema = yup.object({
      title: yup.string().required().max(50).label('Title'),
      description: yup.string().required().max(30).label('Name')
    })

    const route = useRoute()

    return {
      schema,
      route,
      useFormSuccess,
      useFormError,
      sidebar: computed(() => appStore.theme === 'light')
    }
  }
})
</script>
