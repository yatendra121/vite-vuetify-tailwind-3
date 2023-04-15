import { MaybeRef } from '@vueuse/core'
import { Ref } from 'vue'

export type InitialValues = MaybeRef<Record<string, any>> | undefined
export type InitialTValues<T> = Ref<T> | undefined

export type FormMethod = 'PUT' | 'POST'
