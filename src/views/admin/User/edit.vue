<template>
  <title-layout>
    <template #default>
      <title-row>
        <v-col>
          <title-button>
            <vq-submit-btn id="user_form"></vq-submit-btn>
            <vq-back-btn></vq-back-btn>
          </title-button>
        </v-col>
      </title-row>
    </template>
  </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <UserForm
          :action="`user/${route.params.id}`"
          :values-schema="valuesSchema"
          method="PUT"
          :initial-values="response?.data"
        />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios/useAxiosWithLoading'
import { User, RoleUserWithRole } from '@/types/user'
import { defineAsyncComponent, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'

const UserForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const route = useRoute()

const valuesSchema = ref({ roleIds: 'roleUsers.*.role.id' })
interface UserWithRole extends User {
  roleUsers: RoleUserWithRole[]
}
const { response, cancelLoading } = useAxiosWithLoading<UserWithRole>(
  `user/${route.params.id}`,
  {
    method: 'GET'
  }
)

defineExpose({
  response,
  UserForm,
  valuesSchema
})

onBeforeUnmount(() => cancelLoading())
</script>
