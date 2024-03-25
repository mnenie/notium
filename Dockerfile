FROM node:20-alpine as build

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn run build

ENV NITRO_PORT=3000

EXPOSE $NITRO_PORT

CMD [ "node", ".output/server/index.mjs" ]