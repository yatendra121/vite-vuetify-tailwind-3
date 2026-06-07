import { test, expect } from '@playwright/test'
import { PUBLIC_ROUTES } from './fixtures/routes'

test.describe('Public routes load without redirect', () => {
    for (const route of PUBLIC_ROUTES) {
        test(`${route.path} loads and stays on the same URL`, async ({ page }) => {
            await page.goto(route.path)
            await page.waitForLoadState('networkidle')
            const url = new URL(page.url())
            expect(url.pathname).toBe(route.path)
        })
    }
})
