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
            .positive()
            .label('Quantity'),
        price: yup
            .number()
            .transform((value, originalValue) => Number(originalValue))
            .required()
            .positive()
            .label('Price'),
        salePrice: yup
            .number()
            .transform((value, originalValue) => Number(originalValue))
            .required()
            .positive()
            .label('Sale price'),
        description: yup.string().nullable().label('Description'),
        categoryId: yup.string().required().label('Category')
    })
)
