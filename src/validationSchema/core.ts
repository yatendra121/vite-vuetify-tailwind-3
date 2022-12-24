import * as yup from 'yup'

export const name = yup.string().required().max(30).label('Name')
export const email = yup.string().required().max(50).label('Email')
export const mobileNo = yup.string().nullable().max(50).label('Mobile number')
export const dob = yup.string().nullable().max(50).label('DOB')
export const gender = yup.string().nullable().label('Gender')
