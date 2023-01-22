<script setup lang="ts">
import * as yup from 'yup'

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

const useFormSuccess = () => {
  alert('success')
}

const useFormError = (data) => {
  console.log({ data })
}

const useFormClientError = (data) => {
  console.log({ data })
}
</script>

<template>
  <title-layout> </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <vq-form
          id="userForm"
          action="test"
          method="POST"
          :validation-schema="validationSchema"
          @submited-success="useFormSuccess"
          @submited-error="useFormError"
          @submited-client-error="useFormClientError"
        >
          <template #default>
            <v-container>
              <v-row>
                <v-col
                  md="6"
                  sm="6"
                  xs="12"
                  v-for="fieldObj in fields.blocks"
                  :key="fieldObj.token"
                >
                  <vq-checkbox
                    v-if="fieldObj.type == 'checkbox'"
                    :name="fieldObj.token"
                    :label="fieldObj.props.title"
                    :placeholder="fieldObj.props.placeholder"
                  />
                  <vq-text-field
                    v-else
                    :name="fieldObj.token"
                    :label="fieldObj.props.title"
                    :placeholder="fieldObj.props.placeholder"
                  />
                </v-col>
              </v-row>
            </v-container>
          </template>
        </vq-form>
        <vq-submit-btn id="userForm"></vq-submit-btn> </v-responsive></v-card
  ></v-container>
</template>
