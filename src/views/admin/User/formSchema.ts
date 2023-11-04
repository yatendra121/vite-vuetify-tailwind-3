import { userSchema } from '@/validationSchema'
import * as yup from 'yup'

export const validationSchema = userSchema.shape({
    roleUsers: yup.array().nullable().required().min(1).label('Roles'),
    address: yup.string().nullable().max(150).label('Address')
    // address: yup.array().of(
    //     yup.object().shape({
    //         test: yup.string().required().max(10).label('Address')
    //     })
    // )
})
