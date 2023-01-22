import { useDebouncedRef } from '../core'
import { vi } from 'vitest'

describe('useDebouncedRef', () => {
    it('should return a ref object with the correct initial value', () => {
        const ref = useDebouncedRef('initial value')
        expect(ref.value).toBe('initial value')
    })

    it('should update the value after the delay', async () => {
        vi.useFakeTimers()
        const ref = useDebouncedRef('initial value', 200)
        ref.value = 'new value'
        vi.advanceTimersByTime(199)
        expect(ref.value).toBe('initial value')
        vi.advanceTimersByTime(1)
        expect(ref.value).toBe('new value')
    })
})
