import * as yup from 'yup'
import { name } from './core'
import { InferType } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

export const productSchema = toTypedSchema(
    yup.object().shape({
        name,
        quantity: yup
            .number()
            .transform((value, originalValue) => Number(originalValue))
            .required()
            .positive(),
        price: yup
            .number()
            .transform((value, originalValue) => Number(originalValue))
            .required()
            .positive(),
        salePrice: yup
            .number()
            .transform((value, originalValue) => Number(originalValue))
            .required()
            .positive(),
        description: yup.string().nullable(),
        categoryId: yup.string().required()
    })
)
