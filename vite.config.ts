/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './pwa.config'
import { Portal } from './src/utils/portal'
import { resolve } from 'node:path'

const currentPortal = Portal.getInstance()

//let plugins: PluginOption[] = []
//if (currentPortal.getCheckESlint()) plugins = [...plugins, eslintPlugin()]
//if (currentPortal.getAddPWA()) plugins = [...plugins, VitePWA(pwaConfig)]
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
                drop_console: false,
                drop_debugger: false
            }
        }
    },
    optimizeDeps: {
        exclude: ['vuetify']
    }
})