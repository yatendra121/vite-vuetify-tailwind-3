import { describe, expect, it } from 'vitest'
import { capitalize } from '@/composables/string'

describe('capitalize', () => {
    it('uppercases the first letter and lowercases the rest', () => {
        expect(capitalize('hELLO wORLD')).toBe('Hello world')
    })

    it('leaves an empty value empty', () => {
        expect(capitalize('')).toBe('')
    })
})
