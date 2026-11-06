<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

//types
import { User, RoleUserWithRole } from '@/types/user'
import UserForm from './Form.vue'
interface UserWithRole extends User {
  roleUsers: RoleUserWithRole[]
}

const route = useRoute()
const valuesSchema = ref({ roleUsers: 'roleUsers.*.role.id' })

const { response, loading, failed } = useAxiosWithLoading<UserWithRole>(
  `user/${route.params.id}`,
  {
    method: 'GET'
  }
)

const id = 'user_form'
</script>
<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card>
    <LoadState :loading="loading" :failed="failed">
    <UserForm
        :id="id"
        :action="`user/${route.params.id}`"
        :values-schema="valuesSchema"
        method="PUT"
        :initial-values="response?.data"
      />
    </LoadState>
  </v-card>
</template>
