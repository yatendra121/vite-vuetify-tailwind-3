/*eslint no-unused-vars: "off"*/
import { ActionContext, ActionTree, MutationTree } from 'vuex'
import { UserProfile } from '@/types/auth'

export type State = {
    profile: UserProfile | null
}

const state: State = {
    profile: null
}

export enum ActionTypes {
    CHANGE = 'CHANGE',
    UPDATE = 'UPDATE',
    MIX = 'MIX',
    DELETE = 'DELETE'
}

export enum MutationType {
    CHANGE = 'CHANGE',
    UPDATE = 'UPDATE',
    MIX = 'MIX',
    DELETE = 'DELETE'
}

export type Mutations = {
    [MutationType.CHANGE](state: State, data: UserProfile): void
    [MutationType.UPDATE](state: State, data: UserProfile[]): void
    [MutationType.MIX](
        state: State,
        data: Partial<UserProfile> & { id: number }
    ): void
    [MutationType.DELETE](state: State, data: null): void
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        data: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.CHANGE](context: ActionAugments, data: UserProfile): void
    // [ActionTypes.UPDATE](context: ActionAugments): void;
    [ActionTypes.MIX](context: ActionAugments, data: UserProfile): void
    [ActionTypes.DELETE](context: ActionAugments): void
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.CHANGE]({ commit }, { data }) {
        commit(MutationType.CHANGE, data)
    },

    async [ActionTypes.MIX]({ commit }, { data }) {
        commit(MutationType.MIX, data.data)
    },

    async [ActionTypes.DELETE]({ commit }) {
        commit(MutationType.DELETE, null)
    }
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CHANGE](state, data) {
        state.profile = data
    },
    [MutationType.UPDATE](state, data) {
        //state.profile = data;
    },
    [MutationType.MIX](state, newItem) {
        //state.profile = { ...state.data[item], ...newItem };
    },
    [MutationType.DELETE](state, data) {
        state.profile = data
    }
}

export default {
    state,
    mutations,
    actions
}
// eslint-disable-next-line no-unused-vars
function data(CHANGE: MutationType, data: any) {
    throw new Error('Function not implemented.')
}
