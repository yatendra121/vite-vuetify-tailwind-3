export * from './form'
export * from './user'
export * from './response'
export * from './router'
export * from './auth'

export type StaticPage = {
    id: string
    key: string
    title: string
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
}
