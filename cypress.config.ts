import { defineConfig } from 'cypress'

export default defineConfig({
    fixturesFolder: 'tests/e2e/fixtures',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./tests/e2e/plugins/index.ts').default(on, config)
        },
        baseUrl: 'http://localhost:3000',
        specPattern: 'tests/e2e/integration/**/*.cy.{js,jsx,ts,tsx}',
        excludeSpecPattern: 'other/path/to/**/*.js',
        supportFile: 'tests/e2e/support/index.ts'
    },
    component: {
        setupNodeEvents(on, config) {},
        specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
        excludeSpecPattern: 'path/to/**/*.js',
        supportFile: 'tests/e2e/support/component.ts',
        indexHtmlFile: 'tests/e2e/support/component-index.html',
        devServer: {
            framework: 'vue',
            bundler: 'vite'
        }
    }
})
