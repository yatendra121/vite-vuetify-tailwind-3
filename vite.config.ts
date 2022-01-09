import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './pwa.config'
import { Portal } from './src/utils/portal'
const { resolve } = require('path')
//const srcPath = resolve(__dirname, 'src', 'styles', '_variables.scss')

const currentPortal = new Portal()

let plugins = []
if (currentPortal.getCheckESlint()) plugins = [...plugins, eslintPlugin()]
if (currentPortal.getAddPWA()) plugins = [...plugins, VitePWA(pwaConfig)]

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    plugins: [vue(), vueJsx(), vuetify({ autoImport: true }), ...plugins],
    // css: {
    //     preprocessorOptions: {
    //         sass: { additionalData: `@import ${srcPath}\n` },
    //         scss: { additionalData: `@import ${srcPath};\n` }
    //     }
    // },
    base: currentPortal.getDomianPrefix(),
    server: {
        port: currentPortal.getPort()
    },
    build: {
        outDir: currentPortal.getOutputDir(),
        manifest: currentPortal.getAddPWA()
    }
})
