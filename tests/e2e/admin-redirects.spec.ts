import { test, expect } from '@playwright/test'
import { ADMIN_ROUTES } from './fixtures/routes'

/**
 * Without auth cookies / mocked profile the router guard in
 * `src/views/admin/index.vue` must send every protected route to /auth.
 * This file deliberately does NOT use the authenticated fixture.
 */
test.describe('Protected admin routes (unauthenticated)', () => {
    for (const route of ADMIN_ROUTES) {
        test(`${route.path} redirects to /auth`, async ({ page }) => {
            await page.goto(route.path)
            await expect(page).toHaveURL(/\/auth$/, { timeout: 10_000 })
        })
    }
})
