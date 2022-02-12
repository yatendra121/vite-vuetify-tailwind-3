<template>
  <v-container>
    <editor
      v-model="value"
      :init="{
        height: height,
        menubar: false,
        plugins: plugins,
        toolbar: toolbar
      }"
      :tinymce-script-src="baseUrl"
    />
    <transition name="bounce">
      <div
        v-if="errorMessage"
        class="text-xs text-red-500 transition duration-500 ease-in-out dark:text-gray-400 mt-1"
      >
        {{ errorMessage }}
      </div>
    </transition>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useField } from 'vee-validate'
import Editor from '@tinymce/tinymce-vue'
import plugins from './plugins'
import toolbar from './toolbar'
import { Portal } from '@/utils/portal'
const currentPortal = new Portal()

export default defineComponent({
  name: 'TextEditor',
  components: {
    Editor
  },
  props: {
    name: {
      type: String,
      required: true,
      default: () => ''
    },
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    height: {
      type: Number,
      default: () => 250
    }
  },
  setup(props) {
    const { errorMessage, value } = useField(props.name)

    return {
      plugins,
      toolbar,
      errorMessage,
      value,
      baseUrl:
        currentPortal.getBaseUrl() +
        currentPortal.getDomianPrefix() +
        'static/tinymce/tinymce.min.js'
    }
  }
})
</script>
