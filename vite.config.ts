import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './pwa.config'
import { Portal } from './src/utils/portal'

import type { PluginOption } from 'vite'
const vetur = require('@volar-plugins/vetur')

//import { partytownVite } from '@builder.io/partytown/utils'
const { resolve, join } = require('path')
//const srcPath = resolve(__dirname, 'src', 'styles', '_variables.scss')
//const srcPath = resolve(__dirname, 'src', 'sass', 'vuetify.scss')

const currentPortal = Portal.getInstance()

const plugins: PluginOption[] = []
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
        ...plugins,
        vetur(),
        vue(),
        vueJsx(),
        splitVendorChunkPlugin(),
        vuetify({
            autoImport: false,
            // styles: 'expose'
            styles: { configFile: 'src/settings.scss' }
        }),
        AutoImport({
            imports: ['vue', 'pinia', 'vue-router']
        })
        // partytownVite({
        //     dest: join(__dirname, 'admin', '~partytown')
        // }),
        //  ...plugins
    ],
    css: {
        preprocessorOptions: {
            //  sass: { additionalData: `${srcPath}\n` },
            //  scss: { additionalData: ` ${srcPath}\n` }
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
                // manualChunks: {
                //     graphql: ['graphql'],
                //     'chart-js': ['chart.js'],
                //     'graphql-tag': ['graphql-tag'],
                //     'apollo-composable': ['@vue/apollo-composable'],
                //     vuetify: ['vuetify'],
                //     test: ['vue-router', 'vuex', 'yup', 'vee-validate', 'axios']
                // }
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
        include: ['vue', 'vuetify']
    },
    //@ts-ignore
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
        globals: true
    }
})
