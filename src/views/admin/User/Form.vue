<template>
  <vq-form
    id="form"
    action="user"
    :validation-schema="schema"
    @submited-success="useFormSuccess"
    @submited-error="useFormError"
  >
    <template #default>
      <v-container>
        <v-row>
          <v-col>
            <vq-text-field name="name" label="Name" placeholder="Name" />
          </v-col>
          <v-col>
            <vq-text-field name="email" label="Email" placeholder="Email" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <vq-text-field
              name="mobile_no"
              label="Mobile"
              placeholder="Mobile"
            />
          </v-col>
          <v-col>
            <vq-text-field
              name="dob"
              label="Date of Birth"
              placeholder="Date of Birth"
            />
          </v-col>
          <v-col>
            <vq-autocomplete :items="items" name="gender" label="Gender" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <vq-text-editor name="address" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <vq-submit-btn><h1>231412412</h1></vq-submit-btn>
          </v-col>
        </v-row>
        <!-- <vq-file-input name="profile_image"></vq-file-input> -->
      </v-container>
    </template>
    <template #test>
      <h1>2213124</h1>
    </template>
  </vq-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as yup from 'yup'
import { useFormSuccess, useFormError } from '@/composables/formResponse'

export default defineComponent({
  setup() {
    const schema = yup.object({
      email: yup.string().required().nullable().max(50).label('Email'),
      name: yup.string().required().nullable().max(30).label('Name')
    })

    const items = ref([
      { title: 'Male', value: 'male' },
      { title: 'Female', value: 'female' }
    ])

    return {
      useFormSuccess,
      schema,
      useFormError,
      items
    }
  }
})
</script>
