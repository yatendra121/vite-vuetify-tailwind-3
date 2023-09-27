<script lang="ts" setup>
import { ref, onUnmounted, onMounted, reactive } from 'vue'
import { useSocketRepository } from '@/composables/socket'
import { mdiCheck, mdiWindowClose } from '@mdi/js'

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

const executeCommandEvent = (response: CommandResponse) => {
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
  <title-layout> </title-layout>

  <v-container fluid>
    <v-card>
      <v-responsive>
        <v-container>
          <v-row>
            <v-col md="12" sm="12" xs="12">
              <v-form @submit.prevent="executeCommand">
                <v-row>
                  <v-col md="9" sm="7" xs="12">
                    <v-text-field
                      v-model="command"
                      label="Command Name"
                    ></v-text-field>
                  </v-col>
                  <v-col md="3" sm="5" xs="12">
                    <v-row justify="center">
                      <v-col>
                        <v-btn
                          density="comfortable"
                          type="submit"
                          color="primary"
                          stacked
                          variant="elevated"
                          :loading="loading"
                        >
                          Execute
                        </v-btn>
                      </v-col>
                      <v-col>
                        <v-btn
                          density="comfortable"
                          @click="clearResponse"
                          color="white"
                          stacked
                          variant="elevated"
                        >
                          Clear
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
            <v-col md="12" sm="12" xs="12">
              <v-divider></v-divider>
            </v-col>

            <v-col md="12" sm="12" xs="12">
              <v-expansion-panels
                class="mb-12"
                color="primary"
                :model-value="0"
              >
                <v-expansion-panel
                  v-for="(res, index) in commandExecutionRes"
                  :key="index"
                >
                  <v-expansion-panel-title>
                    <!-- <v-icon
                      color="info"
                      :icon="mdiTicketAccount"
                      class="pa-1"
                    ></v-icon> -->

                    <template v-slot:default="{ expanded }">
                      <v-row no-gutters>
                        <v-col cols="11" class="d-flex justify-start">
                          {{ res.name }}
                        </v-col>
                        <v-col cols="1" class="d-flex justify-center">
                          <v-fade-transition leave-absolute>
                            <span v-if="res.status == 'pending'" key="0">
                              <v-progress-circular
                                color="primary"
                                :size="22"
                                indeterminate
                              ></v-progress-circular>
                            </span>
                            <span v-else-if="res.status == 'completed'" key="1">
                              <v-icon color="info" :icon="mdiCheck"></v-icon>
                            </span>
                            <span v-else-if="res.status == 'rejected'" key="2">
                              <v-icon
                                color="error"
                                :icon="mdiWindowClose"
                              ></v-icon>
                            </span>
                          </v-fade-transition>
                        </v-col>
                      </v-row>
                    </template>
                    <!-- <template #actions v-if="loading && !index">
                      <v-progress-circular
                        color="primary"
                        indeterminate
                      ></v-progress-circular>
                    </template> -->
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-container
                      style="max-height: 200px"
                      class="overflow-auto"
                    >
                      <v-row no-gutters>
                        <v-col
                          md="12"
                          sm="12"
                          xs="12"
                          v-for="text in res.response"
                          :key="text.data"
                        >
                          <span style="color: green"> {{ text.data }} </span>
                          <span style="color: red"> {{ text.error }} </span>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </v-card>
  </v-container>
</template>
