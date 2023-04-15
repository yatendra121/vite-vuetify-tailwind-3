import type { Category } from '@/types/category'
import type { Media } from '@/types/media'
export interface CategoryWithImage extends Category {
    images: Media[]
}
