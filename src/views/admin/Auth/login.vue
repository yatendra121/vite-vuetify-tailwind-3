<template>
  <AuthLayout>
    <v-row>
      <v-col lg="12" xl="12" cols="12">
        <v-container>
          <v-responsive>
            <h2 class="font-weight-bold mt-4">Sign in</h2>
            <h6 class="text-subtitle-1 text-grey-darken-1">
              Don't have an account?
              <v-btn variant="text" :to="{ path: 'test' }" color="primary">
                Sign Up
              </v-btn>
            </h6>
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
                <v-row justify="center">
                  <v-col cols="12" class="d-flex align-center">
                    <vq-text-field
                      class="email"
                      name="email"
                      label="Email"
                      placeholder="Email"
                    />
                  </v-col>
                  <v-col cols="12">
                    <vq-text-field
                      class="password"
                      name="password"
                      label="Password"
                      placeholder="Password"
                    />
                  </v-col>
                  <v-col cols="12">
                    <vq-submit-btn block type="submit"></vq-submit-btn
                  ></v-col>
                </v-row>
              </template>
            </vq-form>
          </v-responsive>
        </v-container>
        <v-col lg="12" xl="12" cols="12">
          <div class="d-flex justify-end">
            <v-btn
              variant="text"
              :to="{ name: 'forgot-password' }"
              color="primary"
            >
              Forgot Password?
            </v-btn>
          </div>
        </v-col>
        <v-col align-self="center" lg="12" xl="12" cols="12">
          <div class="d-flex justify-center">
            <v-btn
              variant="outlined"
              class="ma-1"
              size="large"
              icon
              color="primary"
            >
              <v-icon>{{ mdiFacebook }}</v-icon>
            </v-btn>
            <v-btn
              variant="outlined"
              class="ma-1"
              size="large"
              icon
              color="primary"
            >
              <v-icon>{{ mdiGooglePlus }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </AuthLayout>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { Field, Form as LoginForm } from 'vee-validate'
import * as yup from 'yup'
import { mdiFacebook, mdiGooglePlus } from '@mdi/js'
import loginImage from '@/assets/images/loginImage.jpg'
import AuthLayout from './layout.vue'
import { useFormError, useFormClientError } from '@/composables/formResponse'
import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'
export default defineComponent({
  components: {
    Field,
    LoginForm,
    AuthLayout
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email'),
      password: yup.string().required().max(30).label('Password')
    })

    const initialValues = reactive({
      email: 'yatendra@singsys.com',
      password: '12345678Yk'
    })

    const { loginReponseHandler: useFormSuccess } = useAuthProfileRepository()

    return {
      useFormError,
      useFormClientError,
      schema,
      initialValues,
      useFormSuccess,
      loginImage,
      mdiFacebook,
      mdiGooglePlus
    }
  }
})
</script>
