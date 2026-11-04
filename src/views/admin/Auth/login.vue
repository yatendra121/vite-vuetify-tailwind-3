<template>
  <AuthLayout>
    <div class="mb-8">
      <h1 class="text-headline-medium font-weight-bold">Sign in</h1>
      <p class="text-body-medium text-medium-emphasis mt-1 mb-0">
        Enter your details to access your dashboard.
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
        <vq-text-field
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          autocomplete="username"
          class="mb-3"
        />

        <VqPasswordField name="password" label="Password" placeholder="Password" />

        <div class="d-flex justify-end my-2">
          <v-btn
            variant="text"
            :to="{ name: 'forgot-password' }"
            color="primary"
            size="small"
          >
            Forgot password?
          </v-btn>
        </div>

        <vq-submit-btn form="loginForm" text="Sign in" block size="large" />
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
      email: yup.string().required().email().max(50).label('Email'),
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
