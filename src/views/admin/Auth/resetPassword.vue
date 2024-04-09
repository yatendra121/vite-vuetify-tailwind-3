<template>
  <AuthLayout>
    <v-row>
      <v-col lg="12" xl="12" cols="12">
        <h3 class="font-weight-bold mt-4">
          {{ $route.meta.heading }}
        </h3>
      </v-col>
      <v-col lg="12" xl="12" cols="12">
        <vq-form
          action="reset-password"
          method="POST"
          :validation-schema="schema"
          :initial-values="initialValues"
          @submited-success="useFormSuccess"
          @submited-error="useFormError"
        >
          <v-responsive>
            <v-row no-gutters>
              <v-col cols="12">
                <vq-text-field
                  :clearable="false"
                  :readonly="true"
                  name="email"
                  label="Email"
                  placeholder="Email"
                />
              </v-col>
              <v-col cols="12">
                <v-sheet
                  class="py-8 px-6 mx-auto ma-4 text-center"
                  elevation="4"
                  rounded="lg"
                  max-width="500"
                  width="100%"
                >
                  <h3 class="text-h5">Verification Code</h3>

                  <div class="text-subtitle-2 font-weight-light mb-3">
                    Please enter the verification code sent to your email
                    address
                  </div>

                  <vq-otp-input
                    class="mb-8"
                    divider="•"
                    length="4"
                    variant="outlined"
                    name="token"
                  />

                  <div class="text-caption">
                    <v-btn color="primary" size="x-small" variant="text"
                      >Send New Code</v-btn
                    >
                  </div>
                </v-sheet>

                <!-- <vq-text-field name="token" label="Token" placeholder="Token" /> -->
              </v-col>

              <v-col cols="12">
                <vq-text-field
                  name="password"
                  label="Password"
                  placeholder="Password"
                />
              </v-col>

              <v-col cols="12">
                <v-btn
                  width="100%"
                  color="primary"
                  :loading="loading"
                  type="submit"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-responsive>
        </vq-form>
      </v-col>
    </v-row>
  </AuthLayout>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import * as yup from 'yup'
import useFormRepository, { useFormError } from '@/composables/formResponse'
import { mdiFacebook, mdiGooglePlus } from '@mdi/js'
import loginImage from '@/assets/images/loginImage.jpg'
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

    const loading = ref(false)

    console.log(route)
    console.log(route.query)

    return {
      schema,
      loading,
      loginImage,
      mdiFacebook,
      mdiGooglePlus,
      initialValues,
      useFormSuccess,
      useFormError
    }
  }
})
</script>
