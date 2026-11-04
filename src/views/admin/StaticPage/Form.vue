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
    <FormSection title="Page content" description="Published as written on the public site.">
      <v-col cols="12">
        <vq-text-field name="title" label="Title" placeholder="Title" />
      </v-col>
      <v-col cols="12">
        <p class="text-body-medium font-weight-medium mb-2">Description</p>
        <div class="static-page-editor">
          <vq-text-editor :is-dark="isDark" name="description" />
        </div>
      </v-col>
    </FormSection>
    <FormActions hide-cancel>
      <vq-submit-btn text="Save changes"></vq-submit-btn>
    </FormActions>
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
      description: yup.string().required().max(5000).label('Description')
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

<style scoped>
/* Shown until the rich text editor loads, or if its script can't be fetched. */
.static-page-editor :deep(textarea) {
  display: block;
  width: 100%;
  min-height: 240px;
  padding: 12px 16px;
  border: thin solid rgba(var(--v-border-color), 0.4);
  border-radius: 4px;
  background: transparent;
  color: inherit;
  font: inherit;
}
</style>
