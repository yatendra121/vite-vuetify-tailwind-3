import { describe, expect, it } from 'vitest'
import { useDateRepository } from '@/composables/date'
import { getInitials } from '@/composables/string'

describe('toDateTime', () => {
    const { toDateTime } = useDateRepository()

    it('leaves a missing date blank', () => {
        expect(toDateTime(null)).toBe('')
        expect(toDateTime(undefined)).toBe('')
    })

    it('shows whether a time is AM or PM', () => {
        expect(toDateTime(new Date(2026, 0, 15, 15, 4, 5))).toBe(
            '15 Jan 2026, 03:04 PM'
        )
    })
})

describe('getInitials', () => {
    it('uses the first two words', () => {
        expect(getInitials('ada mary lovelace')).toBe('AM')
    })

    it('handles missing names and extra spaces', () => {
        expect(getInitials(undefined)).toBe('')
        expect(getInitials('  ada  ')).toBe('A')
    })
})
