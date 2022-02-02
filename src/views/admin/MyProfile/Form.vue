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
          <vq-text-field name="name" label="Name" placeholder="Name" />
        </v-col>
        <v-col>
          <vq-text-field name="email" label="Email" placeholder="Email" />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <vq-text-field name="mobile_no" label="Mobile" placeholder="Mobile" />
        </v-col>
        <v-col>
          <vq-text-field
            name="dob"
            label="Date of Birth"
            placeholder="Date of Birth"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <VTextEditor name="address" />
        </v-col>
      </v-row>
    </v-container>

    <v-btn color="primary" type="submit">Submit</v-btn>
  </Form>
</template>

<script lang="ts">
import VqTextField from '@/components/Vuetify/VQTextField.vue'
import { defineComponent } from 'vue'
import { Field, Form } from 'vee-validate'
import * as yup from 'yup'
//import { useRouter } from 'vue-router'
import VTextEditor from '@/components/Tinymce/index.vue'
import { _axios } from '@/plugins/axios'
export default defineComponent({
  components: {
    VqTextField,
    VTextEditor,
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
      email: yup.string().required().nullable().max(50).label('Email'),
      name: yup.string().required().nullable().max(30).label('Name'),
      mobile_no: yup.string().required().max(30).label('Mobile')
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
  },
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  })
})
</script>
<style scoped>
form {
  width: 100%;
}
</style>
