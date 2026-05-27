import type { Ref } from 'vue'

type MaybeRef<T> = T | Ref<T>

export type InitialValues = MaybeRef<Record<string, any>> | undefined
export type InitialTValues<T> = Ref<T> | undefined

export type FormMethod = 'PUT' | 'POST'
