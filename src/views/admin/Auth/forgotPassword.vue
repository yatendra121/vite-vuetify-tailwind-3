<template>
  <AuthLayout>
    <div class="mb-6">
      <h2 class="text-headline-small font-weight-bold">Forgot Password</h2>
      <p class="text-body-medium text-medium-emphasis mt-1 mb-0">
        We'll email you a code to reset your password.
      </p>
    </div>

    <vq-form
      id="forgotPasswordForm"
      action="forgot-password"
      method="POST"
      :validation-schema="schema"
      @submited-success="useFormSuccess"
      @submited-error="useFormError"
    >
      <vq-text-field
        v-model="email"
        class="email mb-3"
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        autocomplete="username"
      />

      <vq-submit-btn block size="large" />

      <div class="d-flex justify-center mt-4">
        <v-btn variant="text" :to="{ name: 'login' }" color="primary" size="small">
          Back to Login
        </v-btn>
      </div>
    </vq-form>
  </AuthLayout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as yup from 'yup'
import {
  useFormError,
  useFormSuccessOnlyMessage
} from '@/composables/formResponse'
import { ApiResponse } from '@qnx/composables'
import router from '@/router'
import AuthLayout from './layout.vue'
export default defineComponent({
  components: {
    AuthLayout
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email')
    })

    const useFormSuccess = (response: ApiResponse) => {
      useFormSuccessOnlyMessage(response)
      router.push({
        name: 'reset-password',
        query: {
          email: email.value
        }
      })
    }

    const email = ref('')

    return {
      schema,
      useFormSuccess,
      useFormError,
      email
    }
  }
})
</script>
