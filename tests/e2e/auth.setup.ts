import { test as setup, expect } from '@playwright/test'
import path from 'node:path'
import fs from 'node:fs'

/**
 * Real login flow. Runs once before the "chromium-authed" project and
 * persists cookies + localStorage to `STORAGE_STATE` so that every
 * authenticated spec can skip the UI login.
 *
 * Credentials default to the user-provided test account but can be
 * overridden with E2E_USER_EMAIL / E2E_USER_PASSWORD env vars.
 */

export const STORAGE_STATE = path.join(
    __dirname,
    '.auth',
    'user.json'
)

const EMAIL = process.env.E2E_USER_EMAIL ?? 'yatendra@singsys.com'
const PASSWORD = process.env.E2E_USER_PASSWORD ?? '12345678'

setup('authenticate', async ({ page }) => {
    // Ensure the .auth directory exists.
    fs.mkdirSync(path.dirname(STORAGE_STATE), { recursive: true })

    await page.goto('/admin/auth')

    // Wait for the form to render (Vuetify hydrates async).
    await expect(
        page.getByRole('heading', { name: /sign in/i })
    ).toBeVisible({ timeout: 15_000 })

    // Vuetify renders input labels we can target by text.
    const emailInput = page
        .locator('.v-field', { has: page.getByText('Email', { exact: true }) })
        .locator('input')
        .first()
    const passwordInput = page
        .locator('.v-field', { has: page.getByText('Password', { exact: true }) })
        .locator('input')
        .first()

    await emailInput.fill(EMAIL)
    await passwordInput.fill(PASSWORD)

    await page.getByRole('button', { name: /submit/i }).first().click()

    // Login is successful when the app routes us to /dashboard.
    await page.waitForURL(/\/admin\/dashboard$/, { timeout: 20_000 })

    // Persist storage state (cookies + localStorage) for reuse.
    await page.context().storageState({ path: STORAGE_STATE })
})
