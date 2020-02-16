FROM node:13.8.0-alpine as builder
RUN mkdir -p /service
WORKDIR /service

COPY . .
RUN npm ci

RUN npm run build

FROM node:13.8.0-alpine
RUN mkdir -p /service
WORKDIR /service
COPY --from=builder /service/build .
COPY --from=builder /service/package*.json ./


ENV NODE_ENV=production 
RUN npm ci
EXPOSE 4000
USER node
CMD ["node", "index.js"]