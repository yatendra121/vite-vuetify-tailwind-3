import { test, expect } from '@playwright/test'

test.describe('Forgot password page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/admin/forgot-password')
    })

    test('renders the Forgot Password heading', async ({ page }) => {
        await expect(
            page.getByRole('heading', { name: /forgot password/i })
        ).toBeVisible()
    })

    test('renders the Email label', async ({ page }) => {
        await expect(page.getByText('Email').first()).toBeVisible()
    })

    test('renders a Submit button', async ({ page }) => {
        await expect(
            page.getByRole('button', { name: /submit/i }).first()
        ).toBeVisible()
    })

    test('renders a Login link/control', async ({ page }) => {
        await expect(
            page.getByRole('link', { name: /login/i }).first()
        ).toBeVisible()
    })

    test('clicking Login navigates back to /auth', async ({ page }) => {
        await page.getByRole('link', { name: /login/i }).first().click()
        await expect(page).toHaveURL(/\/admin\/auth$/)
    })

    test('sets the page title to ForgotPassword', async ({ page }) => {
        await expect(page).toHaveTitle(/forgotpassword/i, { timeout: 10_000 })
    })
})
