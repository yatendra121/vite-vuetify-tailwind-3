import { MaybeRef } from '@vueuse/core'

export type InitialValues = MaybeRef<Record<string, any>> | undefined

export type FormMethod = 'PUT' | 'POST'
