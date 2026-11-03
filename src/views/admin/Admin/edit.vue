<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios'
import { defineAsyncComponent, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'

//types
import { User, RoleUserWithRole } from '@/types/user'
interface UserWithRole extends User {
  roleUsers: RoleUserWithRole[]
}

//components
const UserForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const route = useRoute()
const valuesSchema = ref({ roleUsers: 'roleUsers.*.role.id' })

const { response, cancelLoading } = useAxiosWithLoading<UserWithRole>(
  `user/${route.params.id}`,
  {
    method: 'GET'
  }
)

const id = 'user_form'

onBeforeUnmount(() => cancelLoading())
</script>
<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card class="form-card">
    <UserForm
        :id="id"
        :action="`user/${route.params.id}`"
        :values-schema="valuesSchema"
        method="PUT"
        :initial-values="response?.data"
      />
  </v-card>
</template>
