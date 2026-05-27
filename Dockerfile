FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10 --activate
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:20-alpine AS runtime
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10 --activate
COPY --from=build /app/package.json ./
COPY --from=build /app/admin ./admin
ENV PORT=3000
EXPOSE 3000
CMD ["pnpm", "serve", "--host", "0.0.0.0", "--port", "3000"]
