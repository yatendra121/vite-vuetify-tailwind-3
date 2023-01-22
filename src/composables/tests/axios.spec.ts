import { objectToFormData, objectToQueryString } from '../axios/formData'
import { expect } from 'vitest'

// describe('objectToFormData', () => {
//     it('should convert object to FormData', () => {
//         const obj = {
//             name: 'John Doe',
//             age: 30
//             // profilePic: new File(['(binary)'], 'profile.jpg', {
//             //     type: 'image/jpeg'
//             // })
//         }
//         const formData = objectToFormData(obj)
//         expect(formData instanceof FormData).toBe(true)
//         expect(formData.get('name')).toEqual('John Doe')
//         expect(formData.get('age')).toEqual('30')
//         //  expect(formData.get('profilePic')).toEqual(obj.profilePic)
//     })
// })

describe('objectToQueryString', () => {
    it('should convert object to query string', () => {
        const obj = {
            name: 'John Doe',
            age: 30,
            hobbies: ['reading', 'hiking']
        }
        const queryString = objectToQueryString(obj)
        expect(queryString).toEqual(
            'name=John%20Doe&age=30&hobbies%5B0%5D=reading&hobbies%5B1%5D=hiking'
        )
    })
})
