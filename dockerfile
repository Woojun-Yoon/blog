# Base image
FROM node:22-alpine AS base
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production YARN_VERSION=4.5.3
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN apk update && apk upgrade && apk add --no-cache libc6-compat && apk add dumb-init

RUN corepack enable && corepack prepare yarn@${YARN_VERSION}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Build image
FROM base AS builder

WORKDIR /app

COPY . .
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install --immutable

RUN yarn build
RUN yarn prisma migrate deploy

# Runner image
FROM base AS runner
WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["dumb-init", "node", "server.js"]