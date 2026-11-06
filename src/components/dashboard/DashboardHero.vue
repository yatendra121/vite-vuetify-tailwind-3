<script setup lang="ts">
import { computed } from 'vue'
import { mdiPlus } from '@mdi/js'
import BrandRings from '@/components/Basic/BrandRings.vue'
import { useProfileStore } from '@/store/reactivity/profile'

const profileStore = useProfileStore()

const firstName = computed(
  () => profileStore.authProfile?.name?.split(/\s+/)[0] || 'there'
)

const now = new Date()
const hour = now.getHours()
const greeting =
  hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'
const today = now.toLocaleDateString(undefined, {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
})
</script>

<template>
  <VCard
    color="ink"
    variant="flat"
    theme="dark"
    class="h-100 position-relative overflow-hidden"
  >
    <BrandRings
      :size="300"
      class="d-none d-sm-block"
      style="right: -70px; bottom: -120px"
    />
    <div class="position-relative pa-6 pa-md-8">
      <p
        class="text-label-large text-uppercase font-weight-bold text-accent mb-3"
      >
        {{ today }}
      </p>
      <h2 class="text-headline-large font-weight-bold text-break mb-2">
        {{ greeting }}, {{ firstName }}.
      </h2>
      <p class="text-body-large text-medium-emphasis mb-6">
        Here's how your store's catalog looks right now.
      </p>
      <div class="d-flex flex-wrap ga-3">
        <VBtn
          color="accent"
          :prepend-icon="mdiPlus"
          :to="{ name: 'product.create' }"
        >
          Add Product
        </VBtn>
        <VBtn variant="outlined" :to="{ name: 'category.create' }"
          >Add Category</VBtn
        >
      </div>
    </div>
  </VCard>
</template>
