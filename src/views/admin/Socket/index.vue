<script lang="ts" setup>
import { ref, onUnmounted, onMounted, reactive } from 'vue'
import { useSocketRepository } from '@/composables/socket'
import { mdiCheck, mdiConsole, mdiWindowClose } from '@mdi/js'

interface CommandResponse {
  data?: string
  error?: string
  code?: number
}

interface CommandWithResponse {
  name: string
  status: 'pending' | 'completed' | 'rejected'
  response: Array<CommandResponse>
}

let { defaultSocketOffEvent: messageOffEvent } = useSocketRepository()
const { useOnSocket, useEmitSocket } = useSocketRepository()

onMounted(() => {
  messageOffEvent = useOnSocket('execute-command', executeCommandEvent)
})

onUnmounted(() => {
  messageOffEvent()
})

const command = ref('')
const loading = ref(false)
const commandExecutionRes = ref<Array<CommandWithResponse>>([])

const executeCommand = () => {
  if (!command.value) return
  loading.value = true
  commandExecutionRes.value.unshift(
    reactive({ name: command.value, status: 'pending', response: [] })
  )
  if (commandExecutionRes.value.length > 5) commandExecutionRes.value.pop()
  useEmitSocket('execute-command', command.value)
}

const executeCommandEvent = (...args: unknown[]) => {
  const response = args[0] as CommandResponse
  if (response.code !== undefined) {
    commandExecutionRes.value[0].status = response.code
      ? 'rejected'
      : 'completed'
    loading.value = false
    command.value = ''
    return
  }
  commandExecutionRes.value[0].response.push(response)
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
      <v-btn variant="tonal" size="large" @click="clearResponse">Clear</v-btn>
    </v-form>
  </v-card>

  <v-expansion-panels v-if="commandExecutionRes.length" :model-value="0">
    <v-expansion-panel v-for="(res, index) in commandExecutionRes" :key="index">
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
          <div v-for="text in res.response" :key="text.data" class="text-break">
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
