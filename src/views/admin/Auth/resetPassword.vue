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
          @submited-success="useFormSuccess"
          @submited-error="useFormError"
        >
          <v-responsive>
            <v-row no-gutters>
              <v-col cols="12">
                <vq-text-field name="email" label="Email" placeholder="Email" />
              </v-col>
              <v-col cols="12">
                <vq-text-field name="token" label="Token" placeholder="Token" />
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

        <div class="d-flex justify-center">
          <v-btn
            class="tw-m-6"
            variant="outlined"
            size="large"
            icon
            color="primary"
          >
            <v-icon>{{ mdiFacebook }}</v-icon>
          </v-btn>
          <v-btn
            class="tw-m-6"
            variant="outlined"
            size="large"
            icon
            color="primary"
          >
            <v-icon>{{ mdiGooglePlus }}</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </AuthLayout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as yup from 'yup'
import useFormRepository, { useFormError } from '@/composables/formResponse'
import { mdiFacebook, mdiGooglePlus } from '@mdi/js'
import loginImage from '@/assets/images/loginImage.jpg'
import AuthLayout from './layout.vue'
export default defineComponent({
  components: {
    AuthLayout
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email'),
      token: yup.string().required().max(10).label('OTP')
    })

    const { useFormSuccess } = useFormRepository('login')

    const loading = ref(false)

    return {
      schema,
      loading,
      loginImage,
      mdiFacebook,
      mdiGooglePlus,
      useFormSuccess,
      useFormError
    }
  }
})
</script>
