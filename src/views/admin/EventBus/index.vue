<script setup lang="ts">
import * as yup from 'yup'
import { useDateFormat, useTimestamp, useWebWorkerFn } from '@vueuse/core'
import { ref } from 'vue'
import {
  useFormClientError,
  useFormError,
  useFormSuccessOnlyMessage
} from '@/composables/formResponse'
import { useMessage } from '@/composables/message'
const test = ref<number[]>([])
const heavyTask = () => {
  const randomNumber = () => Math.trunc(Math.random() * 5_000_00)
  const numbers: number[] = Array(5_000_000).fill(undefined).map(randomNumber)
  numbers.sort()
  // test.value = numbers
  return numbers.slice(0, 5)
}
const { workerFn, workerStatus } = useWebWorkerFn(heavyTask)

const execute = async () => {
  try {
    test.value = await workerFn()
  } catch {
    useMessage.error('The background task failed. Please try again.')
  }
}

const fields = {
  blocks: [
    {
      token: 'PERSON_NAME',
      type: 'text',
      props: {
        title: 'Enter your name',
        required: true,
        placeholder: 'e.g. John Doe'
      }
    },
    {
      token: 'IS_PERSON_MINOR',
      type: 'checkbox',
      props: {
        title: 'Is the current person minor?',
        default: false
      }
    },
    {
      token: 'PERSON_DOB',
      type: 'date',
      props: {
        title: 'Enter your BOD',
        required: 'IS_PERSON_ MINOR',
        placeholder: 'e.g. 01/01/2000'
      }
    }
  ]
}

const schema: any = {}
fields.blocks.forEach((field) => {
  if (field.type === 'text') {
    schema[field.token] = yup.string()
  }
  if (field.type === 'checkbox') {
    schema[field.token] = yup.string()
  }
  if (field.type === 'date') {
    schema[field.token] = yup.date()
  }

  if (field.props.required) {
    schema[field.token] = schema[field.token].required()
  }

  schema[field.token] = schema[field.token].label(field.props.title)
})

const validationSchema = yup.object({
  ...schema
})

</script>

<template>
  <title-layout />
  <v-card class="form-card mb-4" title="Web worker">
    <v-card-text class="d-flex flex-wrap align-center ga-3 pt-0">
      <v-btn
        color="primary"
        variant="tonal"
        :loading="workerStatus === 'RUNNING'"
        @click="execute()"
      >
        Start
      </v-btn>
      <v-chip size="small">{{ workerStatus }}</v-chip>
      <code v-if="test.length" class="text-break">{{ test }}</code>
    </v-card-text>
  </v-card>

  <v-card class="form-card" title="Dynamic form">
    <vq-form
      id="userForm"
      action="test"
      method="POST"
      :validation-schema="validationSchema"
      @submited-success="useFormSuccessOnlyMessage"
      @submited-error="useFormError"
      @submited-client-error="useFormClientError"
    >
      <template #default>
        <div class="pa-4 pt-0">
          <template v-for="fieldObj in fields.blocks" :key="fieldObj.token">
            <vq-checkbox
              v-if="fieldObj.type == 'checkbox'"
              :name="fieldObj.token"
              :label="fieldObj.props.title"
              :placeholder="fieldObj.props.placeholder"
            />
            <vq-text-field
              v-else
              class="mb-3"
              :name="fieldObj.token"
              :label="fieldObj.props.title"
              :placeholder="fieldObj.props.placeholder"
            />
          </template>
          <div class="d-flex justify-end">
            <vq-submit-btn form="userForm"></vq-submit-btn>
          </div>
        </div>
      </template>
    </vq-form>
  </v-card>
</template>
