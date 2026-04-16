<template>
  <VSnackbarQueue
    @remove="removeMessage"
    :timeout="2500"
    :items="items"
  ></VSnackbarQueue>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import VSnackbarQueue from './VSnackbarQueue.vue'
import { useMessageStore } from '@/store/reactivity/message'
export default defineComponent({
  name: 'MessageQueue',
  components: {
    VSnackbarQueue
  },
  setup() {
    const messageStore = useMessageStore()

    return {
      items: computed(() => messageStore.items),
      removeMessage: () => messageStore.removeMessage()
    }
  }
})
</script>
