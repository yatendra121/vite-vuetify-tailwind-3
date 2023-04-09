export type Category = {
    id: string
    name: string
    status: 'active' | 'inactive'
    createdAt: Date | null
    updatedAt: Date | null
}
