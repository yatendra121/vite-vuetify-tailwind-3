<template>
  <editor
    v-model="value"
    :init="{
      height: height,
      menubar: true,

      plugins:
        'preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
      toolbar:
        'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',

      skin: isDark ? 'oxide' : 'oxide-dark',
      content_css: isDark ? 'default' : 'dark'
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
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useField } from 'vee-validate'
import Editor from '@tinymce/tinymce-vue'
import plugins from './plugins'
import toolbar from './toolbar'
import { Portal } from '@/utils/portal'
const currentPortal = Portal.getInstance()

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
    },
    isDark: {
      type: Boolean,
      default: () => true
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
