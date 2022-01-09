module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'standard', 'prettier'],
  rules: {
    'spaced-comment': 'off'
  },
  overrides: [
    {
      files: ['*.vue', '*.js'],
      extends: [
        'plugin:vue/vue3-strongly-recommended',
        '@vue/eslint-config-typescript',
        'plugin:import/warnings',
        '@vue/eslint-config-prettier'
      ],
      rules: {
        'vue/no-unused-components': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:import/typescript'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/rule-name': 'off'
      }
    },
    {
      files: '**/*.md/*.js',
      rules: {
        'no-undef': 0
      }
    }
  ]
}
