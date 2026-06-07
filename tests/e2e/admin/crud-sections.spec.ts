import { test, expect } from '@playwright/test'

const SECTIONS = [
    { name: 'User', base: '/admin/user', titleList: /user/i, titleEdit: /edit user/i },
    { name: 'Admin', base: '/admin/admin', titleList: /admin/i, titleEdit: /edit admin/i },
    {
        name: 'Category',
        base: '/admin/category',
        titleList: /category/i,
        titleEdit: /edit category/i
    },
    {
        name: 'Product',
        base: '/admin/product',
        titleList: /product/i,
        titleEdit: /edit product/i
    }
] as const

for (const section of SECTIONS) {
    test.describe(`${section.name} section`, () => {
        test('list page loads', async ({ page }) => {
            await page.goto(section.base)
            await page.waitForLoadState('networkidle')
            expect(new URL(page.url()).pathname).toBe(section.base)
            await expect(page).toHaveTitle(section.titleList, { timeout: 10_000 })
        })

        test('create page loads', async ({ page }) => {
            await page.goto(`${section.base}/create`)
            await page.waitForLoadState('networkidle')
            expect(new URL(page.url()).pathname).toBe(`${section.base}/create`)
        })

        test('edit page loads with an id param', async ({ page }) => {
            await page.goto(`${section.base}/edit/1`)
            await page.waitForLoadState('networkidle')
            expect(new URL(page.url()).pathname).toBe(`${section.base}/edit/1`)
            await expect(page).toHaveTitle(section.titleEdit, { timeout: 10_000 })
        })
    })
}
