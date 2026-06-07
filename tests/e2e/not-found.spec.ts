import { test, expect } from '@playwright/test'

test.describe('Unknown route (PageNotFound)', () => {
    test('redirects unauthenticated visitors to /auth', async ({ page }) => {
        // Unauthenticated users hitting any non-public URL — including
        // an unknown one that matches the catchAll route — get bounced
        // to login by the my-profile 401 handler in
        // `useAuthProfileRepository.myProfile`.
        await page.goto('/admin/this-route-does-not-exist-12345')
        await expect(page).toHaveURL(/\/admin\/auth$/, { timeout: 10_000 })
    })
})
