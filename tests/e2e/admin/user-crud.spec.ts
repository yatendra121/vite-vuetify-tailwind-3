import { test, expect, type Page } from '@playwright/test'

/**
 * Mutation tests for the User section.
 *
 * Backend calls are mocked at the network layer so the tests are
 * deterministic and don't pollute real data. Response envelopes
 * match the live API:
 *
 *   list / autocomplete  →  { "data": { "data": [...], "total": N } }
 *   single record        →  { "data": { ...record } }
 *
 * Inputs are matched via `getByRole('textbox', { name: ... })`
 * because Vuetify renders a "Clear <field>" icon button that also
 * carries the field name, which makes the broader `getByLabel`
 * locator ambiguous.
 */

const ROLE_ID = 'role-admin-uuid'
const ROLES = [
    { id: ROLE_ID, name: 'admin', title: 'Administrator' },
    { id: 'role-editor-uuid', name: 'editor', title: 'Editor' }
]

const listEnvelope = (items: unknown[]) =>
    JSON.stringify({ data: { data: items, total: items.length } })

const recordEnvelope = (record: unknown) =>
    JSON.stringify({ data: record })

const messageEnvelope = (record: unknown, message: string) =>
    JSON.stringify({ data: record, message })

const textbox = (page: Page, name: string) =>
    page.getByRole('textbox', { name, exact: true })

const installCommonMocks = async (page: Page) => {
    await page.route(/\/api\/role(\?|$)/, (route) => {
        if (route.request().method() !== 'GET') return route.fallback()
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: listEnvelope(ROLES)
        })
    })
}

test.describe('User — create', () => {
    test('submits a POST with the typed name and email', async ({ page }) => {
        await installCommonMocks(page)

        const postPromise = page.waitForRequest(
            (req) =>
                req.method() === 'POST' &&
                /\/api\/user(\?|$)/.test(req.url()) &&
                !/\/change-status\//.test(req.url())
        )

        await page.route(/\/api\/user(\?|$)/, (route) => {
            if (route.request().method() !== 'POST') return route.fallback()
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: messageEnvelope(
                    { id: 'new-user-uuid', name: 'Test User' },
                    'User created'
                )
            })
        })

        await page.goto('/admin/user/create')
        await page.waitForLoadState('networkidle')

        await textbox(page, 'Name').fill('Test User')
        await textbox(page, 'Email').fill('test.user@example.com')
        await textbox(page, 'Mobile').fill('9876543210')

        // Vuetify autocomplete: open the menu then pick an option.
        await page
            .getByRole('combobox', { name: /role/i })
            .first()
            .click()
        await page
            .getByRole('option', { name: /administrator/i })
            .first()
            .click()
        await page.keyboard.press('Escape')

        await page.getByRole('button', { name: /^submit$/i }).first().click()

        const request = await postPromise
        const payload = request.postData() ?? ''
        // axios PUT/POST may serialize as JSON or x-www-form-urlencoded
        // depending on Content-Type defaults — accept either.
        expect(payload).toMatch(/Test User|Test%20User|Test\+User/)
        expect(payload).toMatch(
            /test\.user@example\.com|test\.user%40example\.com/
        )
        expect(payload).toContain('9876543210')
    })

    test('shows validation errors when required fields are empty', async ({
        page
    }) => {
        await installCommonMocks(page)
        await page.goto('/admin/user/create')
        await page.waitForLoadState('networkidle')

        await page.getByRole('button', { name: /^submit$/i }).first().click()

        // The form surfaces one Vuetify alert per failing field.
        const alerts = page.getByRole('alert')
        await expect(alerts.first()).toBeVisible()
        expect(await alerts.count()).toBeGreaterThanOrEqual(3)

        // And the page hasn't navigated away from /create.
        expect(new URL(page.url()).pathname).toBe('/admin/user/create')
    })
})

test.describe('User — edit', () => {
    const USER_ID = 'e2e-test-user-uuid'
    const EXISTING_USER = {
        id: USER_ID,
        name: 'Old Name',
        email: 'old@example.com',
        mobileNo: '1112223333',
        gender: 'male',
        dob: '1990-01-01',
        status: 'active',
        roleUsers: [
            {
                id: 'role-user-uuid',
                userId: USER_ID,
                roleId: ROLE_ID,
                role: { id: ROLE_ID, name: 'admin', title: 'Administrator' }
            }
        ]
    }

    const installEditMocks = async (page: Page) => {
        await installCommonMocks(page)
        await page.route(new RegExp(`/api/user/${USER_ID}$`), (route) => {
            const method = route.request().method()
            if (method === 'GET') {
                return route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: recordEnvelope(EXISTING_USER)
                })
            }
            if (method === 'PUT') {
                return route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: messageEnvelope(
                        { ...EXISTING_USER },
                        'User updated'
                    )
                })
            }
            return route.fallback()
        })
    }

    test('prefills the form from the API response', async ({ page }) => {
        await installEditMocks(page)
        await page.goto(`/admin/user/edit/${USER_ID}`)
        await expect(textbox(page, 'Name')).toHaveValue('Old Name', {
            timeout: 10_000
        })
        await expect(textbox(page, 'Email')).toHaveValue('old@example.com')
    })

    test('sends a PUT with the updated name', async ({ page }) => {
        await installEditMocks(page)

        const putPromise = page.waitForRequest(
            (req) =>
                req.method() === 'PUT' &&
                new RegExp(`/api/user/${USER_ID}$`).test(req.url())
        )

        await page.goto(`/admin/user/edit/${USER_ID}`)

        const nameField = textbox(page, 'Name')
        await expect(nameField).toHaveValue('Old Name', { timeout: 10_000 })
        await nameField.fill('Updated Name')

        await page.getByRole('button', { name: /^submit$/i }).first().click()

        const request = await putPromise
        const payload = request.postData() ?? ''
        expect(payload).toMatch(/Updated Name|Updated%20Name|Updated\+Name/)
    })
})

test.describe('User — change status', () => {
    const USER_ID = 'row-user-uuid'

    test('toggling the row switch sends PUT /user/change-status/:id', async ({
        page
    }) => {
        await page.route(/\/api\/user(\?|$|\/)/, (route) => {
            const url = route.request().url()
            const method = route.request().method()
            if (method !== 'GET') return route.fallback()
            if (/\/change-status\//.test(url)) return route.fallback()
            // Single-record fetch (/api/user/:id) — let the real backend
            // (or its 404) answer; we only mock the list.
            if (/\/api\/user\/[^?]+$/.test(url)) return route.fallback()
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: listEnvelope([
                    {
                        id: USER_ID,
                        name: 'Row User',
                        email: 'row@example.com',
                        gender: 'male',
                        status: 'active',
                        createdAt: '2024-01-01T00:00:00Z'
                    }
                ])
            })
        })

        const putPromise = page.waitForRequest(
            (req) =>
                req.method() === 'PUT' &&
                new RegExp(`/api/user/change-status/${USER_ID}$`).test(req.url())
        )

        await page.route(
            new RegExp(`/api/user/change-status/${USER_ID}$`),
            (route) => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: messageEnvelope(
                        { status: 'inactive' },
                        'Status changed'
                    )
                })
            }
        )

        await page.goto('/admin/user')
        await page.waitForLoadState('networkidle')

        // Vuetify's VSwitch exposes the underlying input as
        // role="checkbox", scoped to the row's status cell.
        const statusSwitch = page.getByRole('checkbox').last()
        await expect(statusSwitch).toBeVisible({ timeout: 10_000 })
        await statusSwitch.click()

        const request = await putPromise
        expect(request.method()).toBe('PUT')
        expect(request.url()).toMatch(
            new RegExp(`/user/change-status/${USER_ID}$`)
        )
    })
})
