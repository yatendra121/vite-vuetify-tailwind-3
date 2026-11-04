import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useRouteLoading } from '@/composables/loading'
import type { Router } from 'vue-router'

const fakeRouter = () => {
    const hooks: Record<string, () => void> = {}
    const router = {
        beforeEach: (fn: () => void) => (hooks.start = fn),
        afterEach: (fn: () => void) => (hooks.end = fn),
        onError: (fn: () => void) => (hooks.error = fn)
    } as unknown as Router
    return { router, hooks }
}

describe('useRouteLoading', () => {
    beforeEach(() => vi.useFakeTimers())
    afterEach(() => vi.useRealTimers())

    it('stays hidden for a fast navigation', () => {
        const { router, hooks } = fakeRouter()
        const loading = useRouteLoading(router, 150)
        hooks.start()
        vi.advanceTimersByTime(100)
        hooks.end()
        vi.advanceTimersByTime(500)
        expect(loading.value).toBe(false)
    })

    it('shows for a slow navigation and hides when it ends', () => {
        const { router, hooks } = fakeRouter()
        const loading = useRouteLoading(router, 150)
        hooks.start()
        vi.advanceTimersByTime(200)
        expect(loading.value).toBe(true)
        hooks.end()
        expect(loading.value).toBe(false)
    })

    it('hides when a navigation fails', () => {
        const { router, hooks } = fakeRouter()
        const loading = useRouteLoading(router, 150)
        hooks.start()
        vi.advanceTimersByTime(200)
        hooks.error()
        expect(loading.value).toBe(false)
    })
})
