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
  <VCard class="congratulations-card overflow-hidden" min-height="180">
    <VRow no-gutters class="h-100">
      <VCol cols="12" sm="8" class="d-flex flex-column justify-center pa-6">
        <p class="text-caption text-medium-emphasis text-uppercase font-weight-bold mb-1" style="letter-spacing: 1px">
          Welcome back 👋
        </p>
        <h5 class="text-h5 font-weight-bold text-primary mb-2">
          {{ profileStore.authProfile?.name || 'User' }}!
        </h5>
        <p class="text-body-2 text-medium-emphasis mb-4">
          You have done <strong class="text-high-emphasis">72%</strong> more sales today.
          Check your new badge in your profile.
        </p>
        <div>
          <VBtn color="primary" variant="tonal" size="small" rounded="lg">
            View Badges
          </VBtn>
        </div>
      </VCol>

      <VCol cols="12" sm="4" class="d-flex align-end justify-center position-relative">
        <img
          :src="illustrationJohn"
          class="john-illustration"
          alt="illustration"
          height="170"
        />
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
@use 'vuetify/settings' as v;

.congratulations-card {
  background: linear-gradient(
    135deg,
    rgba(var(--v-theme-primary), 0.06) 0%,
    rgba(var(--v-theme-surface), 1) 60%
  );
}

.john-illustration {
  position: absolute;
  bottom: 0;
  inset-inline-end: 1.5rem;
}
</style>
