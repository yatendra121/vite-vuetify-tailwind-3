<template>
  <AuthLayout>
    <div class="mb-6">
      <h2 class="text-headline-small font-weight-bold">{{ $route.meta.heading }}</h2>
      <p class="text-body-medium text-medium-emphasis mt-1 mb-0">
        Enter the code we emailed you and choose a new password.
      </p>
    </div>

    <vq-form
      id="resetPasswordForm"
      action="reset-password"
      method="POST"
      :validation-schema="schema"
      :initial-values="initialValues"
      @submited-success="useFormSuccess"
      @submited-error="useFormError"
    >
      <vq-text-field
        :clearable="false"
        :readonly="true"
        name="email"
        label="Email"
        placeholder="Email"
        class="mb-3"
      />

      <h3 class="text-title-small font-weight-medium mb-2">Verification Code</h3>
      <vq-otp-input
        class="mb-1"
        divider="•"
        length="4"
        variant="outlined"
        name="token"
      />
      <div class="d-flex justify-end mb-3">
        <v-btn
          color="primary"
          size="small"
          variant="text"
          :to="{ name: 'forgot-password' }"
        >
          Send New Code
        </v-btn>
      </div>

      <VqPasswordField
        name="password"
        label="Password"
        placeholder="Password"
        autocomplete="new-password"
        class="mb-3"
      />

      <vq-submit-btn block size="large" />
    </vq-form>
  </AuthLayout>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import * as yup from 'yup'
import useFormRepository, { useFormError } from '@/composables/formResponse'
import AuthLayout from './layout.vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    AuthLayout
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email'),
      password: yup.string().required().max(50).label('Password'),
      token: yup.string().required().max(10).label('OTP')
    })

    const { useFormSuccess } = useFormRepository('login')
    const route = useRoute()

    const initialValues = reactive({
      email: route.query?.email
    })

    return {
      schema,
      initialValues,
      useFormSuccess,
      useFormError
    }
  }
})
</script>
