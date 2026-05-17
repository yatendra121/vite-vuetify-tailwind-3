<template>
  <VqSnackbarQueue
    @remove="removeMessage"
    :timeout="2500"
    :items="items"
  ></VqSnackbarQueue>
</template>
<script lang="ts">
import { defineComponent, computed, } from 'vue'
import VqSnackbarQueue from './VqSnackbarQueue.vue'
import { useMessageStore } from '@/store/reactivity/message'
export default defineComponent({
  name: 'MessageQueue',
  components: {
    VqSnackbarQueue
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
