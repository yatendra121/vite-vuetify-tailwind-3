import { test, expect } from '@playwright/test'

const PAGES = [
    { path: '/admin/drawer', title: /drawer/i },
    { path: '/admin/fullscreen', title: /fullscreen/i },
    { path: '/admin/my-profile', title: /my profile/i },
    { path: '/admin/eventbus', title: /eventbus/i },
    { path: '/admin/testing', title: /testing/i },
    { path: '/admin/socket', title: /socket/i }
] as const

test.describe('Miscellaneous admin pages', () => {
    for (const p of PAGES) {
        test(`${p.path} loads`, async ({ page }) => {
            await page.goto(p.path)
            await page.waitForLoadState('networkidle')
            expect(new URL(page.url()).pathname).toBe(p.path)
            await expect(page).toHaveTitle(p.title, { timeout: 10_000 })
        })
    }
})
