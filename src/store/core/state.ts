import { UserProfile } from '@/types/auth'

// define your typings for the store state

export type State = {
    profile: UserProfile | null
}

export const state: State = {
    profile: null
}
