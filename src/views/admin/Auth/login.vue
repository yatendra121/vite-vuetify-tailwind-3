<template>
  <AuthLayout>
    <div class="mb-6">
      <h2 class="text-h5 font-weight-bold">Sign in</h2>
      <p class="text-body-2 text-medium-emphasis mt-1">
        Don't have an account?
        <v-btn variant="text" :to="{ path: 'test' }" color="primary" density="compact" class="px-1">
          Sign Up
        </v-btn>
      </p>
    </div>

    <vq-form
      id="loginForm"
      action="login"
      method="POST"
      :validation-schema="schema"
      :initial-values="initialValues"
      @submited-success="useFormSuccess"
      @submited-error="useFormError"
      @submited-client-error="useFormClientError"
    >
      <template #default>
        <vq-text-field name="email" label="Email" placeholder="Email" class="mb-3" />

        <vq-text-field name="password" label="Password" placeholder="Password" class="mb-1" />

        <div class="d-flex justify-end mb-4">
          <v-btn variant="text" :to="{ name: 'forgot-password' }" color="primary" density="compact">
            Forgot Password?
          </v-btn>
        </div>

        <vq-submit-btn form="loginForm" block />
      </template>
    </vq-form>
  </AuthLayout>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import * as yup from 'yup'
import AuthLayout from './layout.vue'
import { useFormError, useFormClientError } from '@/composables/formResponse'
import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'
export default defineComponent({
  components: {
    AuthLayout
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email'),
      password: yup.string().required().max(30).label('Password')
    })

    const initialValues = reactive({
      email: '',
      password: ''
    })

    const { loginResponseHandler: useFormSuccess } = useAuthProfileRepository()

    return {
      useFormError,
      useFormClientError,
      schema,
      initialValues,
      useFormSuccess
    }
  }
})
</script>
