<template>
  <AuthLayout>
    <v-row>
      <v-col lg="12" xl="12" cols="12">
        <v-img
          :src="`https://picsum.photos/500/300?image=${1 * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
          height="50"
        >
          <template #placeholder>
            <v-row
              class="fill-height ma-0 d-flex align-center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <h2 class="font-weight-bold mt-4 text--darken-2">Sign in</h2>
        <h6 class="text-subtitle-1 text-grey-darken-1">
          Don't have an account?
          <v-btn variant="text" :to="{ path: 'test' }" color="primary"
            >Sign Up</v-btn
          >
        </h6>
        <LoginForm
          :initial-values="initialValues"
          :validation-schema="schema"
          @submit="onSubmit"
        >
          <v-responsive>
            <v-row justify="center" no-gutters>
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
                <v-btn
                  width="100%"
                  color="primary"
                  :loading="loading"
                  type="submit"
                  >Sign In</v-btn
                >
              </v-col>
            </v-row>
          </v-responsive>
        </LoginForm>
        <div class="d-flex justify-end">
          <v-btn
            variant="text"
            :to="{ name: 'forgot-password' }"
            color="primary"
            >Forgot Password?</v-btn
          >
        </div>

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
import { defineComponent, reactive, ref } from 'vue'
import { Field, Form as LoginForm } from 'vee-validate'
import * as yup from 'yup'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'
import { useRouter } from 'vue-router'
import { mdiFacebook, mdiGooglePlus } from '@mdi/js'
import loginImage from '@/assets/images/loginImage.jpg'
import AuthLayout from './layout.vue'
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

    const { loginUser } = useAuthUserRepository()

    const router = useRouter()
    const loading = ref(false)
    const onSubmit: any = async (values: Array<string>, actions: any) => {
      loading.value = true
      loginUser('login', values)
        .then(() => {
          router.push({
            name: 'dashboard'
          })
        })
        .catch((response) => {
          const data = JSON.parse(response.request.response)
          actions.setErrors(data.errors)
        })
        .finally(() => {
          loading.value = false
        })
      //console.log({ response })
      // actions.setErrors({
      //   email: ['qrqjrnqw  rnqnwnrc sc qwrnqrnw'],
      //   password: ['test']
      // })
      // console.log(actions)
      // console.log(values)
      ///  console.log(JSON.stringify(values, null, 2));
      //actions.resetForm();
    }

    return {
      onSubmit,
      schema,
      initialValues,
      loading,
      loginImage,
      mdiFacebook,
      mdiGooglePlus
    }
  }
})
</script>
