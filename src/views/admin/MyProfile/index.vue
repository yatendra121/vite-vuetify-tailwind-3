<template>
  <title-layout />

  <v-card class="form-card mb-4 overflow-hidden">
    <v-sheet color="ink" theme="dark" height="96" class="position-relative overflow-hidden">
      <BrandRings :size="220" style="right: 24px; top: -70px" />
    </v-sheet>
    <div class="d-flex flex-wrap align-end ga-4 px-4 px-md-6 pb-4 mt-n10 position-relative">
      <v-avatar
        color="accent"
        size="88"
        class="text-headline-small font-weight-bold flex-shrink-0 border-md border-surface border-opacity-100"
      >
        {{ initials }}
      </v-avatar>
      <div style="min-width: 0">
        <div class="d-flex flex-wrap align-center ga-2">
          <h2 class="text-title-large font-weight-bold text-break">
            {{ profileStore.profile?.name }}
          </h2>
          <v-chip v-if="roleName" color="primary" size="small" variant="tonal">
            {{ roleName }}
          </v-chip>
        </div>
        <span class="text-body-medium text-medium-emphasis text-break">
          {{ profileStore.profile?.email }}
        </span>
      </div>
    </div>
    <v-divider />
    <v-tabs v-model="tab" color="primary">
      <v-tab :value="1">Update Profile</v-tab>
      <v-tab :value="2">Settings</v-tab>
    </v-tabs>
  </v-card>

  <v-card class="form-card">
    <v-window v-model="tab">
      <v-window-item :value="1">
        <LoadState :loading="loading" :failed="failed">
          <MyProfileForm :initial-values="response?.data" />
        </LoadState>
      </v-window-item>
      <v-window-item :value="2">
        <EmptyState
          :icon="mdiCogOutline"
          title="No settings yet"
          description="Account settings will appear here."
        />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { mdiCogOutline } from '@mdi/js'
import BrandRings from '@/components/Basic/BrandRings.vue'
import { useAxiosWithLoading } from '@/composables/axios'
import type { User } from '@/types'
import { useProfileStore } from '@/store/reactivity/profile'
import { getInitials, useStringRepository } from '@/composables/string'
import MyProfileForm from './Form.vue'

const tab = ref(1)

const { toCapitalize } = useStringRepository()
const profileStore = useProfileStore()

const roleName = computed(
  () =>
    profileStore.profile?.role?.title ??
    toCapitalize(profileStore.profile?.role?.name)
)
const initials = computed(() => getInitials(profileStore.profile?.name))

const { response, loading, failed } = useAxiosWithLoading<User>(
  'my-profile/show',
  {
    method: 'GET'
  }
)
</script>
