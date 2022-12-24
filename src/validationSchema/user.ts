import * as yup from 'yup'
import { name, email, mobileNo, dob, gender } from './core'
export const userSchema = yup.object({
    name,
    email,
    mobileNo,
    dob,
    gender
})
