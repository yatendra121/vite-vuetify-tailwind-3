export type Media = {
    id: string
    storage: 'local' | 's3'
    fileName: string
    type: string
    productId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    path: string
    thumbPath: string
}
