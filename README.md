# vite-vuetify-tailwind-3

Admin SPA built on Vue 3 (`<script setup>`), Vite, Vuetify 4, Tailwind 3, Pinia, and vue-router 4. Part of the `vq-vuetify-workspace` pnpm workspace; depends on the workspace packages `@qnx/composables` and `@qnx/vuetify`.

## Requirements

- Node 20+
- pnpm 10+ (the workspace is pnpm-managed; `package-lock.json` is not used)

## Setup

```sh
pnpm install
```

## Environment

Env loading is driven by [portalConfig.js](portalConfig.js), which reads:

1. `.env` — selects the active environment (`local` / `develop` / `staging`)
2. `.env.<environment>` — base values for that environment
3. `.env.<portal>.<environment>` — per-portal overrides (currently only `admin`)

Set the active environment by writing one of `local|develop|staging` into `.env`:

```sh
echo "local" > .env
```

Files committed to the repo cover URL config only. `.env.admin.*` files (which hold `VUE_APP_CLIENT_ID`) are gitignored — request them from another developer or generate fresh values per environment.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Regenerate portal config and start Vite with `--host` |
| `pnpm build` | Run `vue-tsc --noEmit` then `vite build` |
| `pnpm build-force` | Skip type check (use only for debugging) |
| `pnpm serve` | Preview the production build |
| `pnpm tsc` | Type-check only |
| `pnpm lint` | ESLint with `--fix` |
| `pnpm format` | Prettier write |
| `pnpm test:unit` | Vitest |
| `pnpm test:e2e` | Cypress (interactive) |

## Project layout

```
src/
├── App.vue
├── main.ts
├── assets/             static assets
├── components/         global registered components
├── composables/        reusable composition functions (auth, etc.)
├── directives/         custom directives
├── layouts/            shell layouts (e.g. Admin)
├── plugins/            Vuetify, axios, registration entry
├── router/             vue-router routes (auth, admin)
├── store/              Pinia stores
├── styles/             SCSS variables and global styles
├── types/              shared TS types
├── utils/portal/       portal (multi-tenant build target) singleton
├── validationSchema/   vee-validate schemas
└── views/              route components
```

## Build output

`vite build` writes to the directory named in `VUE_APP_OUTPUT_DIR` (e.g. `admin/`). The output dir is gitignored.

## Docker

See [Dockerfile](Dockerfile). The image uses a two-stage `node:20-alpine` build that installs via pnpm and runs `vite preview` in the runtime stage. Note: because this app depends on workspace packages (`@qnx/*`), the Dockerfile only builds successfully when run with the full workspace as context — building from this directory alone will fail at `pnpm install`.

## License

See [LICENSE](LICENSE).
