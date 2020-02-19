FROM node:13.8.0-alpine as builder
RUN mkdir -p /thodskra
WORKDIR /thodskra

COPY . .
RUN npm ci

RUN npm run build

FROM node:13.8.0-alpine
RUN mkdir -p /thodskra
WORKDIR /thodskra
COPY --from=builder /thodskra/build .
COPY --from=builder /thodskra/package*.json ./


ENV NODE_ENV=production 
RUN npm ci
EXPOSE 3000
USER node
CMD ["node", "index.js"]