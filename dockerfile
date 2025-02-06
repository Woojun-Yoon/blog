FROM node:22-alpine

RUN apk add --no-cache libc6-compat

RUN corepack enable && corepack prepare yarn@4.5.3 --activate

WORKDIR /app

COPY . .

RUN yarn set version 4.5.3

RUN yarn install --immutable --inline-builds

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "serve"]
