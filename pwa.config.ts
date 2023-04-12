import { VitePWAOptions } from 'vite-plugin-pwa'

const domainPrefix = ''

const vitePwaOptions: Partial<VitePWAOptions> = {
    mode: 'development',
    base: '/',
    devOptions: {
        enabled: true,
        /* when using generateSW the PWA plugin will switch to classic */
        type: 'module',
        navigateFallback: 'index.html'
    },
    includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png'
    ],
    manifest: {
        name: 'Vite Vuetify Tailwind 3',
        theme_color: 'white',
        short_name: 'Vuetify 3',
        display: 'standalone',
        background_color: '#ffffff',
        lang: 'en',
        icons: [
            {
                src: `${domainPrefix}img/icons/48x48.png`,
                sizes: '48x48',
                type: 'image/png'
            },
            {
                src: `${domainPrefix}img/icons/72x72.png`,
                sizes: '72x72',
                type: 'image/png'
            },
            {
                src: `${domainPrefix}img/icons/96x96.png`,
                sizes: '96x96',
                type: 'image/png'
            },
            {
                src: `${domainPrefix}img/icons/144x144.png`,
                sizes: '144x144',
                type: 'image/png'
            },
            {
                src: `${domainPrefix}img/icons/512x512.png`,
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
}
export default vitePwaOptions
