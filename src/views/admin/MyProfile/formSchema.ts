import { userSchema } from '@/validationSchema/user'
import * as yup from 'yup'

const baseSchema = userSchema.pick(['name', 'mobileNo', 'gender'])
export const validationSchema = baseSchema.shape({
    address: yup.string().nullable().required().max(150).label('Address')
})
