/**
 * Flat ESLint config.
 *
 * Composition (in order):
 *   1. Ignores  — keep this first so subsequent blocks don't scan
 *      generated/vendored paths.
 *   2. JS base  — @eslint/js recommended.
 *   3. Vue + TS — `defineConfigWithVueTs` from
 *      @vue/eslint-config-typescript wires the TS parser into both
 *      `.ts`/`.tsx` files and the `<script lang="ts">` block of
 *      `.vue` SFCs, plus eslint-plugin-vue's flat presets.
 *   4. Project relaxations — every rule the old `.eslintrc.js`
 *      silently turned off lives here so behaviour matches.
 *   5. Test overrides — tests get the loosest knobs.
 *   6. Prettier  — must be last so it disables stylistic rules that
 *      conflict with Prettier formatting.
 */
const js = require('@eslint/js')
const {
  defineConfigWithVueTs,
  vueTsConfigs
} = require('@vue/eslint-config-typescript')
const pluginVue = require('eslint-plugin-vue')
const prettier = require('eslint-config-prettier')
const globals = require('globals')

module.exports = defineConfigWithVueTs(
  // 1. Ignores -----------------------------------------------------------
  {
    name: 'project/ignores',
    ignores: [
      'node_modules/**',
      'dist/**',
      'admin/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',
      'tests/e2e/.auth/**',
      'portals/index.ts',
      'public/**',
      'src/store/core/**',
      '**/*.d.ts'
    ]
  },

  // 2. JS base -----------------------------------------------------------
  js.configs.recommended,

  // 3. Vue (strongly recommended) ---------------------------------------
  pluginVue.configs['flat/strongly-recommended'],

  // 4. TS wiring for both .ts files and <script lang="ts"> blocks --------
  vueTsConfigs.recommended,

  // 5. Project-wide language + globals + relaxations ---------------------
  {
    name: 'project/relaxations',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      // Carried over verbatim from the legacy `.eslintrc.js`. Most are
      // turned off because the project's component style sheets / Vue
      // SFCs intentionally play loose with these conventions.
      'spaced-comment': 'off',
      'no-unused-vars': 'off',

      // TypeScript escape hatches the codebase relies on heavily.
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      // Vue style decisions deliberately left to the author.
      'vue/no-unused-components': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      // The codebase has SFCs that use <script setup> without a lang
      // attribute as well as the legacy lang="tsx". Don't force a
      // particular choice.
      'vue/block-lang': 'off'
    }
  },

  // 5b. Build/config files run in Node CommonJS — `require()` is
  //     the only sensible option there. Quiet the TS-leaning rule
  //     for project-root configs.
  {
    name: 'project/node-configs',
    files: [
      '*.js',
      '*.cjs',
      'portalConfig.js',
      'postcss.config.js',
      'tailwind.config.js',
      'eslint.config.js'
    ],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },

  // 6. Test overrides ----------------------------------------------------
  {
    name: 'project/tests',
    files: [
      'tests/**/*.{ts,tsx,js}',
      'src/**/__tests__/**/*.{ts,tsx,js}',
      'src/**/*.{test,spec}.{ts,tsx,js}'
    ],
    rules: {
      'no-empty-pattern': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },

  // 7. Prettier (last so it can override stylistic rules) ----------------
  prettier
)
