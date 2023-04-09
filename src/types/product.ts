export type Product = {
    id: string
    name: string
    quantity: number
    price: number
    salePrice: number
    description: string | null
    categoryId: string
    status: 'active' | 'inactive'
    createdAt: Date | null
    updatedAt: Date | null
}
