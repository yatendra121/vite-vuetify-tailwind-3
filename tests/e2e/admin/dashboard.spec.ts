import { test, expect } from '@playwright/test'

test.describe('Dashboard page', () => {
    test('renders after login', async ({ page }) => {
        await page.goto('/admin/dashboard')
        await page.waitForLoadState('networkidle')
        await expect(page).toHaveURL(/\/admin\/dashboard$/)
    })

    test('has the Dashboard title', async ({ page }) => {
        await page.goto('/admin/dashboard')
        await expect(page).toHaveTitle(/dashboard/i, { timeout: 10_000 })
    })
})
