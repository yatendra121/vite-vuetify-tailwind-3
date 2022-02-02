if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/vite-vuetify-tailwind-3/admin/sw.js', {
      scope: '/vite-vuetify-tailwind-3/admin/'
    })
  })
}
