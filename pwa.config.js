const domainPrefix = ''

module.exports = {
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
    start_url: domainPrefix,
    display: 'standalone',
    background_color: '#ffffff',
    lang: 'en',
    scope: domainPrefix,
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
