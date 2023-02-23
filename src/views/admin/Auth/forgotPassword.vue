<template>
  <AuthLayout>
    <v-row>
      <v-col lg="12" xl="12" cols="12">
        <h3 class="font-weight-bold mt-4">Forgot Password</h3>
      </v-col>
      <v-col lg="12" xl="12" cols="12">
        <vq-form
          action="forgot-password"
          method="POST"
          :validation-schema="schema"
          @submited-success="useFormSuccess"
          @submited-error="useFormError"
        >
          <v-container>
            <v-responsive>
              <v-row no-gutters>
                <v-col cols="12">
                  <vq-text-field
                    class="email"
                    name="email"
                    label="Email"
                    placeholder="Email"
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
          </v-container>
          <div class="d-flex justify-end">
            <v-btn
              variant="text"
              :to="{ name: 'forgot-password' }"
              color="primary"
            >
              Login
            </v-btn>
          </div>

          <div class="d-flex justify-center">
            <v-btn variant="outlined" size="large" icon color="primary">
              <v-icon>{{ mdiFacebook }}</v-icon>
            </v-btn>
            <v-btn variant="outlined" size="large" icon color="primary">
              <v-icon>{{ mdiGooglePlus }}</v-icon>
            </v-btn>
          </div>
        </vq-form>
      </v-col>
    </v-row>
  </AuthLayout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as yup from 'yup'
import useFormRepository, { useFormError } from '@/composables/formResponse'
import { mdiFacebook, mdiGooglePlus } from '@mdi/js'
import AuthLayout from './layout.vue'
export default defineComponent({
  components: {
    AuthLayout
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email')
    })

    const { useFormSuccess } = useFormRepository('reset-password')

    const loading = ref(false)

    return {
      schema,
      loading,
      mdiFacebook,
      mdiGooglePlus,
      useFormSuccess,
      useFormError
    }
  }
})
</script>
