<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { AuthStatus } from '@/types/auth'
import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'

const { myProfile } = useAuthProfileRepository()

const authStatus = ref<AuthStatus>('pending')
const finished = ref(false)
myProfile()
  .then(() => {
    authStatus.value = 'authenticated'
  })
  .catch(() => (authStatus.value = 'unauthenticated'))
  .finally(() => {
    finished.value = true
  })

const EntryComponent = defineAsyncComponent(
  () => import('./views/admin/index.vue')
)
</script>

<template>
  <EntryComponent :auth-status="authStatus" :auth-loading="!finished" />
</template>
