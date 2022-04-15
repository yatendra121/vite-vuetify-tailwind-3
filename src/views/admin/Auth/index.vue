<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <h2>Login Page</h2>
          <v-card class="mx-auto my-12" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <Form
              :initial-values="initialValues"
              :validation-schema="schema"
              @submit="onSubmit"
            >
              <v-row justify="center">
                <v-col cols="12">
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
                  <v-btn :loading="true" color="primary" type="submit"
                    >Submit</v-btn
                  >
                </v-col>
              </v-row>
            </Form>
          </v-card>
        </v-responsive></v-col
      ></v-row
    ></v-container
  >
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    Field,
    Form
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().max(50).label('Email'),
      password: yup.string().required().max(30).label('Password')
    })

    const initialValues = reactive({
      email: 'yatendra@singsys.com',
      password: '123456789'
    })

    const { loginUser } = useAuthUserRepository()

    const router = useRouter()
    const onSubmit = async (values: Array<string>, actions: any) => {
      loginUser('login', values)
        .then((response) => {
          console.log(response)
          router.push({
            name: 'dashboard'
          })
        })
        .catch((response) => {
          const data = JSON.parse(response.request.response)
          actions.setErrors(data.errors)
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
      initialValues
    }
  }
})
</script>
