<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-responsive>
          <h2>Login Page</h2>
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <v-container>
              <v-card class="mx-auto" width="300">
                <v-list v-model:opened="open">
                  <v-list-item
                    link
                    rounded="xl"
                    :active="true"
                    active-color="primary"
                    prepend-icon="mdi-home"
                    title="Home"
                  ></v-list-item>

                  <v-list-group>
                    <template #activator="{ props }">
                      <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-account-circle"
                        title="Admin"
                        value="Admin"
                      ></v-list-item>
                    </template>

                    <v-list-item
                      v-for="([title, icon], i) in admins"
                      :key="i"
                      :value="title"
                      :title="title"
                      :prepend-icon="icon"
                    ></v-list-item>
                  </v-list-group>

                  <v-list-group>
                    <template #activator="{ props }">
                      <v-list-item
                        v-bind="props"
                        title="Actions"
                        value="Users"
                      ></v-list-item>
                    </template>

                    <v-list-item
                      v-for="([title, icon], i) in cruds"
                      :key="i"
                      :value="title"
                      :title="title"
                      :prepend-icon="icon"
                    ></v-list-item>
                  </v-list-group>
                </v-list>
              </v-card>

              {{ open }}
            </v-container>
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <Form
              v-slot="{ values }"
              :initial-values="initialValues"
              :validation-schema="schema"
              @submit="onSubmit"
            >
              {{ values }}
              <v-select :multiple="true" :items="test"> </v-select>
              <vq-text-field
                :loading="loading"
                class="email"
                name="email"
                label="Email"
                placeholder="Email"
              />
              <vq-text-field
                class="password"
                name="password"
                label="Password"
                placeholder="Password"
              />
              <v-btn color="primary" type="submit">Submit</v-btn>
            </Form>
          </v-card>
        </v-responsive></v-col
      ></v-row
    ></v-container
  >
</template>

<script lang="ts">
import VqTextField from '@/components/Vuetify/VQTextField.vue'
import { defineComponent, reactive, ref } from 'vue'
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    VqTextField,
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

    const test = ['Foo', 'Bar', 'Fizz', 'Buzz']

    const open = ref(['1'])
    const admins = ref([
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline']
    ])

    const cruds = ref([
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete']
    ])

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
      initialValues,
      test,
      open,
      admins,
      cruds
    }
  },
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
})
</script>
