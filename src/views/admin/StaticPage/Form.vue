<template>
  <vq-form
    id="static_page_form"
    :action="`static-page/${route.meta.key}`"
    method="PUT"
    :initial-values="initialValues"
    :validation-schema="schema"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
  >
    <v-container>
      <v-row>
        <v-col md="12" sm="12" xs="12">
          <vq-text-field name="title" label="Title" placeholder="Title" />
        </v-col>

        <v-col md="12" sm="12" xs="12">
          <vq-text-editor :is-dark="isDark" name="description" />
        </v-col>
        <v-col md="12" sm="12" xs="12">
          <vq-submit-btn></vq-submit-btn>
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
      description: yup.string().required().max(5000).label('Name')
    })

    const route = useRoute()

    return {
      schema,
      route,
      useFormSuccess,
      useFormError,
      isDark: computed(() => appStore.theme === 'dark')
    }
  }
})
</script>
