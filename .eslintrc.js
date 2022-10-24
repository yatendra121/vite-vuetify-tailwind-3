/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
//'plugin:import/recommended'
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
      files: ['*.vue'],
      extends: [
        'plugin:vue/vue3-strongly-recommended',
        '@vue/eslint-config-typescript/recommended'
        //   '@vue/eslint-config-prettier'
      ],
      rules: {
        'vue/no-unused-components': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'on'
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
    },
    {
      files: ['*.d.ts'],
      rules: {
        'no-unused-vars': 'off'
      }
    },
    {
      files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ]
}
