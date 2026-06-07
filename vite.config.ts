/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { Portal } from './src/utils/portal'
import { resolve } from 'node:path'

const currentPortal = Portal.getInstance()

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    plugins: [
        vue({ template: { transformAssetUrls } }),
        vueJsx(),
        vuetify({ autoImport: true })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    base: currentPortal.getBaseUrl(),
    server: {
        port: currentPortal.getPort()
    },
    build: {
        outDir: currentPortal.getOutputDir(),
        manifest: currentPortal.getAddPWA(),
        rollupOptions: {
            output: {
                manualChunks: {
                    'chart-js': ['chart.js', 'vue-chartjs'],
                    'vue3-apexcharts': ['vue3-apexcharts'],
                    axios: ['axios']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    optimizeDeps: {
        exclude: ['vuetify']
    },
    test: {
        // Vitest only runs unit specs from tests/unit and any *.test.ts
        // under src/. Playwright owns everything under tests/e2e — those
        // files use `@playwright/test` and would error if Vitest tried
        // to execute them.
        include: ['tests/unit/**/*.{test,spec}.ts', 'src/**/*.{test,spec}.ts'],
        exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**']
    }
})
