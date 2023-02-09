import { defineStore } from 'pinia'
import { UserProfile } from '@/types'

type UserProfileStore = {
    profile: UserProfile | null
}

export const useProfileStore = defineStore({
    id: 'profile',
    state: () =>
        ({
            profile: null
        } as UserProfileStore),
    getters: {
        authProfile(): UserProfile | null {
            return this.profile
        },
        hasAuth(): boolean {
            return !!this.profile
        }
    },
    actions: {
        change(user: UserProfile) {
            this.profile = user
        },
        update(data: Required<UserProfile>) {
            this.profile = { ...this.profile, ...data }
        },
        delete() {
            this.profile = null
        }
    }
})
