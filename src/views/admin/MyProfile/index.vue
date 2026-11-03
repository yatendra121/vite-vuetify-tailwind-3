<template>
  <title-layout />

  <v-card class="form-card mb-4">
    <div class="d-flex align-center ga-4 pa-4 pa-md-6">
      <v-avatar color="primary" size="64" class="text-title-large font-weight-bold flex-shrink-0">
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
        <MyProfileForm :initial-values="response?.data" />
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
import { computed, onBeforeUnmount, defineAsyncComponent, ref } from 'vue'
import { mdiCogOutline } from '@mdi/js'
import { useAxiosWithLoading } from '@/composables/axios'
import type { User } from '@/types'
import { useProfileStore } from '@/store/reactivity/profile'
import { useStringRepository } from '@/composables/string'

const MyProfileForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const tab = ref(1)

const { toCapitalize } = useStringRepository()
const profileStore = useProfileStore()

const roleName = computed(() => toCapitalize(profileStore.profile?.role?.name))
const initials = computed(() =>
  (profileStore.profile?.name ?? '')
    .split(/\s+/)
    .slice(0, 2)
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('')
)

const { response, cancelLoading } = useAxiosWithLoading<User>(
  'my-profile/show',
  {
    method: 'GET'
  }
)
onBeforeUnmount(() => cancelLoading())
</script>
