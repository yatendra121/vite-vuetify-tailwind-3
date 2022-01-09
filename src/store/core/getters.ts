import { GetterTree } from 'vuex'
import { State } from '@/store/core/state'
import { UserProfile } from '@/types/auth'

export type Getters = {
    authProfile(state: State): UserProfile
    permissions(state: State): any
    isAuth(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
    authProfile: (state) => (state.profile ? state.profile.profile : null),
    isAuth: (state) => !!(state.profile && state.profile.profile),
    permissions: (state) =>
        state.profile &&
        state.profile.profile &&
        state.profile.profile.permissions
            ? state.profile.profile.permissions
            : []
}
