import type { Product } from '@/types/product'
import type { Media } from '@/types/media'
export interface ProductWithImage extends Product {
    images: Media[]
}
