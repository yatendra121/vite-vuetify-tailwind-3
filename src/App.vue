<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { AuthStatus } from '@/types/auth'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'

const { myProfile, finished } = useAuthUserRepository()

const authStatus = ref<AuthStatus>('pending')
myProfile('my-profile')
  .then(() => {
    authStatus.value = 'authenticated'
  })
  .catch(() => (authStatus.value = 'unauthenticated'))

const EntryComponent = defineAsyncComponent(
  () => import('./views/admin/index.vue')
)
</script>

<template>
  <EntryComponent :auth-status="authStatus" :auth-loading="!finished" />
</template>
