<script setup lang="ts">
import illustrationJohnDark from '@/assets/images/illustration-john-dark.png'
import illustrationJohnLight from '@/assets/images/illustration-john-light.png'
import { useProfileStore } from '@/store/reactivity/profile'
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const profileStore = useProfileStore()
const { global } = useTheme()
const illustrationJohn = computed(() =>
  global.name.value === 'dark' ? illustrationJohnDark : illustrationJohnLight
)
</script>

<template>
  <VCard class="h-100 overflow-hidden">
    <div class="d-flex h-100">
      <div class="d-flex flex-column justify-center pa-6" style="min-width: 0">
        <p class="text-body-medium text-medium-emphasis mb-1">Welcome back</p>
        <h2 class="text-headline-small font-weight-bold mb-2 text-break">
          {{ profileStore.authProfile?.name || 'User' }}
        </h2>
        <p class="text-body-medium text-medium-emphasis mb-4">
          Here's an overview of what's happening today.
        </p>
        <div>
          <VBtn color="primary" variant="tonal" size="small" :to="{ name: 'my-profile' }">
            View Profile
          </VBtn>
        </div>
      </div>

      <img
        :src="illustrationJohn"
        class="d-none d-sm-block align-self-end ms-auto me-4 flex-shrink-0"
        alt=""
        height="170"
      />
    </div>
  </VCard>
</template>

