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

<script>
import { defineComponent } from 'vue'
import { mdiInformation } from '@mdi/js'

export default defineComponent({
  name: 'VSnackbarQueue',
  emits: ['remove'],
  props: {
    items: {
      type: Array,
      required: true
    },

    value: {
      type: Boolean,
      default: false
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
    const removeItem = (p) => {
      emit('remove', p)
    }

    return { mdiInformation, removeItem }
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