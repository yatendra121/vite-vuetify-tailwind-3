<template>
  <VSnackbar
    class="snackbar-queue"
    v-for="(item, i) in items"
    @update:model-value="removeItem"
    :key="item.id"
    :model-value="i === 0"
    :timeout="item.color === 'error' ? errorTimeout : timeout"
    :color="item.color"
    :absolute="absolute"
    location="top"
    :vertical="vertical"
    :close-on-back="false"
    transition="scale-transition"
  >
    <template #default>
      {{ item.message }}
    </template>

    <template #actions>
      <!-- `inherit` follows the snackbar text instead of the primary default. -->
      <v-btn color="inherit" variant="text" @click="removeItem(item.id)">
        {{ items.length > 1 ? `Next (${items.length - 1})` : 'Close' }}
      </v-btn>
    </template>
  </VSnackbar>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VSnackbar } from 'vuetify/components'
import type { MessageItem } from '@/store/reactivity/message'

export default defineComponent({
  name: 'VqSnackbarQueue',
  emits: ['remove'],
  components: {
    VSnackbar
  },
  props: {
    items: {
      type: Array as PropType<MessageItem[]>,
      required: true
    },
    timeout: {
      type: Number,
      default: 50000
    },
    // Errors stay longer: they usually need reading and acting on.
    errorTimeout: {
      type: Number,
      default: 6000
    },
    color: {
      type: String,
      default: 'success'
    },
    absolute: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const removeItem = (p: number | unknown) => {
      emit('remove', p)
    }

    return { removeItem }
  }
})
</script>
<style scoped>
/* V4: multi-line content — previously handled by :multi-line prop */
.snackbar-queue :deep(.v-snackbar__content) {
  white-space: pre-wrap;
}
</style>
