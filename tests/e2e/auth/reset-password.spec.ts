import { test, expect } from '@playwright/test'

test.describe('Reset password page', () => {
    test('renders the ResetPassword heading', async ({ page }) => {
        await page.goto('/admin/reset-password')
        await expect(
            page.getByRole('heading', { name: /resetpassword/i })
        ).toBeVisible()
    })

    test('renders Email and Password labels', async ({ page }) => {
        await page.goto('/admin/reset-password')
        await expect(page.getByText('Email').first()).toBeVisible()
        await expect(page.getByText('Password').first()).toBeVisible()
    })

    test('shows the Verification Code panel', async ({ page }) => {
        await page.goto('/admin/reset-password')
        await expect(
            page.getByRole('heading', { name: /verification code/i })
        ).toBeVisible()
    })

    test('renders the Submit button', async ({ page }) => {
        await page.goto('/admin/reset-password')
        await expect(
            page.getByRole('button', { name: /^submit$/i }).first()
        ).toBeVisible()
    })

    test('sets the page title to ResetPassword', async ({ page }) => {
        await page.goto('/admin/reset-password')
        await expect(page).toHaveTitle(/resetpassword/i, { timeout: 10_000 })
    })
})
