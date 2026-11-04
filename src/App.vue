<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { AuthStatus } from '@/types/auth'
import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'
import { getToken } from '@/composables/auth/useAuthRepository'

const { myProfile } = useAuthProfileRepository()

// Sessions are sent as a bearer token, so without one the API can only say 401.
const hasToken = Boolean(getToken())
const authStatus = ref<AuthStatus>(hasToken ? 'pending' : 'unauthenticated')
const finished = ref(!hasToken)
if (hasToken) {
  myProfile()
    .then(() => {
      authStatus.value = 'authenticated'
    })
    .catch((err) => {
      console.error('[Auth] profile fetch failed', err)
      authStatus.value = 'unauthenticated'
    })
    .finally(() => {
      finished.value = true
    })
}

const EntryComponent = defineAsyncComponent(
  () => import('./views/admin/index.vue')
)
</script>

<template>
  <EntryComponent :auth-status="authStatus" :auth-loading="!finished" />
</template>
