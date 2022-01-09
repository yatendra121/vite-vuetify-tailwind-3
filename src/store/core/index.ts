import {
    createStore,
    createLogger,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions
} from 'vuex'
import profile, { Mutations, Actions } from './profile'
import { getters, Getters } from './getters'
import { State } from '@/store/state'

// store.ts
export const store = createStore<State>({
    plugins: [createLogger()],
    //state: state,
    // mutations: {},
    // actions: {},
    modules: { profile },
    getters
})

export type Store = Omit<
    VuexStore<State>,
    'getters' | 'commit' | 'dispatch'
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}

export function useStore() {
    return store as Store
}

export default store
