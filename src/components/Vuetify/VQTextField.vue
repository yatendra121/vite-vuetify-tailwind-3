<template>
  <v-container fluid>
    <v-text-field
      v-model="value"
      prepend-inner-icon=""
      :loading="loading"
      :rounded="true"
      flat
      :error="!!errorMessage"
      :error-messages="errorMessage"
      :messages="errorMessage"
      :type="type"
      :clearable="!!isClearable"
      :label="label"
    >
      <template #progress>
        <v-progress-linear absolute height="7"></v-progress-linear>
      </template>
    </v-text-field>
    {{ errorMessage }}
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useField } from 'vee-validate'
export default defineComponent({
  name: 'VQTextField',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => 'text'
    },
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    clearable: {
      type: Boolean,
      default: () => true
    }
  },
  setup(props) {
    const { errorMessage, value } = useField(props.name, null, {
      validateOnUpdate: false
    })

    const isClearable = computed(() => {
      return value.value && props.clearable
    })

    return {
      errorMessage,
      value,
      isClearable
    }
  }
})
</script>
