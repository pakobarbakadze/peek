FROM node:alpine As development

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN apk add --update python3 make g++\
    && rm -rf /var/cache/apk/*

RUN npm install -g pnpm \
    && pnpm install

COPY . .

RUN pnpm run build


FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm \
    && pnpm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/user/src/main"]
