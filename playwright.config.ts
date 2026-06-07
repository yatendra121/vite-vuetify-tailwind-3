import { defineConfig, devices } from '@playwright/test'
import path from 'node:path'

const PORT = Number(process.env.VUE_APP_PORT) || 3000
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || `http://localhost:${PORT}`

const STORAGE_STATE = path.join(__dirname, 'tests/e2e/.auth/user.json')

export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'html',
    timeout: 30_000,
    expect: { timeout: 5_000 },
    use: {
        baseURL: BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    projects: [
        // 1. One-time login that captures storageState for everyone else.
        {
            name: 'setup',
            testMatch: /auth\.setup\.ts/
        },

        // 2. Specs that must run signed-in.
        {
            name: 'chromium-authed',
            use: {
                ...devices['Desktop Chrome'],
                storageState: STORAGE_STATE
            },
            dependencies: ['setup'],
            testMatch: /admin\/.*\.spec\.ts/
        },

        // 3. Specs that must run signed-out (login flow, redirects, 404, root).
        {
            name: 'chromium-anon',
            use: { ...devices['Desktop Chrome'] },
            testIgnore: [/auth\.setup\.ts/, /admin\/.*\.spec\.ts/]
        }
    ],
    webServer: {
        command: 'pnpm dev',
        url: BASE_URL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
        stdout: 'ignore',
        stderr: 'pipe'
    }
})
