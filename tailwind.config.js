module.exports = {
  prefix: 'tw-',
  darkMode: 'false',
  separator: '',
  corePlugins: {
    preflight: false
  },
  content: [
    './index.html',
    './packages/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
