# 1. Install dependencies only when needed
FROM node:18 AS dependencies
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:18 AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
ARG ENV_DEVELOPMENT
RUN echo ${ENV_DEVELOPMENT} > .env
RUN yarn build

FROM node:18 AS runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
