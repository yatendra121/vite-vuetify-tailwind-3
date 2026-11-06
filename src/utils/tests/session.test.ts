import { beforeEach, describe, expect, it, vi } from 'vitest'
import Cookies from 'js-cookie'

vi.mock('js-cookie', () => ({
    default: { get: vi.fn(), set: vi.fn(), remove: vi.fn() }
}))

vi.mock('@/utils/portal', () => ({
    Portal: {
        getInstance: () => ({
            getCookiePrefix: () => '',
            getBaseUrl: () => 'https://admin.example.com/'
        })
    }
}))

describe('session cookies', () => {
    beforeEach(() => {
        vi.stubGlobal('window', { location: { hostname: 'admin.example.com' } })
        vi.mocked(Cookies.set).mockClear()
        vi.mocked(Cookies.remove).mockClear()
    })

    it('removes tokens with the domain they were set with', async () => {
        const { setTokens, removeTokens } =
            await import('@/composables/auth/useAuthRepository')

        setTokens({ access_token: 'a', refresh_token: 'r' })
        const setOptions = vi.mocked(Cookies.set).mock.calls[0][2]
        expect(setOptions?.domain).toBe('admin.example.com')

        vi.mocked(Cookies.remove).mockClear()
        removeTokens()

        const removed = vi.mocked(Cookies.remove).mock.calls
        expect(removed).toHaveLength(2)
        for (const [, options] of removed) {
            expect(options).toEqual({ path: '/', domain: setOptions?.domain })
        }
    })
})
