<template>
  <Form
    v-slot="{}"
    :initial-values="initialValue"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <v-container class="grey lighten-5">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row no-gutters>
        <v-col>
          <vq-text-field name="title" label="Title" placeholder="Title" />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <vq-text-editor name="description" />
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="primary" type="submit">Submit</v-btn>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'
import { _axios } from '@/plugins/axios'
export default defineComponent({
  components: {
    Field,
    Form
  },
  props: {
    initialValue: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  setup() {
    const schema = yup.object({
      title: yup.string().required().max(50).label('Email'),
      description: yup.string().required().max(30).label('Name')
    })

    //const router = useRouter()
    const onSubmit = async (values: Array<string>, actions: any) => {
      _axios
        .put('my-profile', values)
        .then(() => {
          //   router.push({
          //     name: 'dashboard'
          //   })
        })
        .catch((response) => {
          const data = JSON.parse(response.request.response)
          actions.setErrors(data.errors)
        })
    }

    return {
      onSubmit,
      schema
    }
  }
})
</script>
<style scoped>
form {
  width: 100%;
}
</style>
