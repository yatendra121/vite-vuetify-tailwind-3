import { test, expect } from '@playwright/test'

test.describe('Login page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/admin/auth')
    })

    test('renders the sign-in heading', async ({ page }) => {
        await expect(page.getByRole('heading', { name: /sign in/i })).toBeVisible()
    })

    test('renders email and password labels', async ({ page }) => {
        await expect(page.getByText('Email').first()).toBeVisible()
        await expect(page.getByText('Password').first()).toBeVisible()
    })

    test('renders a Forgot Password control', async ({ page }) => {
        await expect(page.getByText(/forgot password\??/i).first()).toBeVisible()
    })

    test('renders a Submit button', async ({ page }) => {
        await expect(
            page.getByRole('button', { name: /submit/i }).first()
        ).toBeVisible()
    })

    test('clicking Forgot Password navigates to /forgot-password', async ({ page }) => {
        await page.getByText(/forgot password\??/i).first().click()
        await expect(page).toHaveURL(/\/admin\/forgot-password$/)
    })

    test('sets the page title to Login', async ({ page }) => {
        await expect(page).toHaveTitle(/login/i, { timeout: 10_000 })
    })
})
