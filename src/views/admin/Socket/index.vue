<script lang="ts" setup>
import { ref, onUnmounted, onMounted, reactive } from 'vue'
import { useSocketRepository } from '@/composables/socket'
import { useMessage } from '@/composables/message'
import { mdiCheck, mdiConsole, mdiWindowClose } from '@mdi/js'

interface CommandResponse {
  data?: string
  error?: string
  code?: number
}

interface CommandWithResponse {
  id: number
  name: string
  status: 'pending' | 'completed' | 'rejected'
  response: Array<CommandResponse>
}

let { defaultSocketOffEvent: messageOffEvent } = useSocketRepository()
const { useOnSocket, useEmitSocket, socket } = useSocketRepository()

const failCommand = () => {
  if (!loading.value) return
  loading.value = false
  if (commandExecutionRes.value[0]) {
    commandExecutionRes.value[0].status = 'rejected'
  }
  useMessage.error('Lost the connection before the command finished.')
}

onMounted(() => {
  messageOffEvent = useOnSocket('execute-command', executeCommandEvent)
  socket.on('disconnect', failCommand)
  socket.connect()
})

onUnmounted(() => {
  messageOffEvent()
  socket.off('disconnect', failCommand)
  socket.disconnect()
})

const command = ref('')
const loading = ref(false)
const commandExecutionRes = ref<Array<CommandWithResponse>>([])

let nextCommandId = 1

const executeCommand = () => {
  // Enter still submits the form while the button shows its spinner.
  if (!command.value || loading.value) return
  if (!socket.connected) {
    useMessage.error('Not connected to the server. Please try again.')
    return
  }
  loading.value = true
  commandExecutionRes.value.unshift(
    reactive({
      id: nextCommandId++,
      name: command.value,
      status: 'pending',
      response: []
    })
  )
  if (commandExecutionRes.value.length > 5) commandExecutionRes.value.pop()
  useEmitSocket('execute-command', command.value)
}

const executeCommandEvent = (...args: unknown[]) => {
  const response = args[0] as CommandResponse
  const current = commandExecutionRes.value[0]
  if (!current) return
  if (response.code !== undefined) {
    current.status = response.code
      ? 'rejected'
      : 'completed'
    loading.value = false
    command.value = ''
    return
  }
  current.response.push(response)
}

const clearResponse = () => {
  commandExecutionRes.value = []
}
</script>

<template>
  <title-layout />

  <v-card class="mb-4">
    <v-form class="d-flex flex-wrap align-start ga-3 pa-4" @submit.prevent="executeCommand">
      <v-text-field
        v-model="command"
        label="Command Name"
        hide-details
        style="min-width: 220px; flex: 1 1 320px"
      ></v-text-field>
      <v-btn type="submit" color="primary" size="large" :loading="loading">
        Execute
      </v-btn>
      <v-btn
        variant="tonal"
        size="large"
        :disabled="loading"
        @click="clearResponse"
      >
        Clear
      </v-btn>
    </v-form>
  </v-card>

  <v-expansion-panels v-if="commandExecutionRes.length" :model-value="0">
    <v-expansion-panel v-for="res in commandExecutionRes" :key="res.id">
      <v-expansion-panel-title>
        <div class="d-flex align-center justify-space-between ga-3 w-100 pe-3">
          <span class="text-truncate">{{ res.name }}</span>
          <v-progress-circular
            v-if="res.status == 'pending'"
            color="primary"
            :size="20"
            :width="2"
            indeterminate
          ></v-progress-circular>
          <v-icon
            v-else-if="res.status == 'completed'"
            color="success"
            :icon="mdiCheck"
          ></v-icon>
          <v-icon
            v-else-if="res.status == 'rejected'"
            color="error"
            :icon="mdiWindowClose"
          ></v-icon>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="overflow-auto" style="max-height: 240px">
          <div
            v-for="(text, line) in res.response"
            :key="line"
            class="text-break"
          >
            <span class="text-success">{{ text.data }}</span>
            <span class="text-error">{{ text.error }}</span>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  <v-card v-else>
    <EmptyState
      :icon="mdiConsole"
      title="No commands yet"
      description="Run a command to see its output here."
    />
  </v-card>
</template>
