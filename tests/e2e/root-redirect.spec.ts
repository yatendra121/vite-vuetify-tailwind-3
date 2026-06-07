import { test, expect } from '@playwright/test'

test.describe('Root route', () => {
    test('redirects "/" to "/auth"', async ({ page }) => {
        await page.goto('/admin/')
        await expect(page).toHaveURL(/\/admin\/auth$/)
    })
})
