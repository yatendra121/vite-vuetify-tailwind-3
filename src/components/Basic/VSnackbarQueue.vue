<template>
  <v-snackbar
    class="snackbar-queue"
    v-for="(item, i) in items"
    @update:model-value="removeItem"
    :key="item.id"
    :model-value="i === 0"
    :timeout="timeout"
    :color="item.color"
    :absolute="absolute"
    location="center top"
    :vertical="vertical"
    :close-on-back="false"
    transition="scale-transition"
  >
    <template #default>
      {{ item.message }}
    </template>

    <template #actions>
      <v-btn color="white" variant="text" @click="removeItem(item.id)">
        {{ items.length > 1 ? `Next(${items.length - 1})` : 'Close' }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { MessageItem } from '@/store/reactivity/message'

export default defineComponent({
  name: 'VSnackbarQueue',
  emits: ['remove'],
  props: {
    items: {
      type: Array as PropType<MessageItem[]>,
      required: true
    },
    timeout: {
      type: Number,
      default: 50000
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
.snackbar-queue {
  margin-top: -50px;
}

/* V4: multi-line content — previously handled by :multi-line prop */
.snackbar-queue :deep(.v-snackbar__content) {
  white-space: pre-wrap;
}
</style>