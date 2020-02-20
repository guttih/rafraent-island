FROM node:13.8.0-alpine as builder
RUN mkdir -p /nodesoap
WORKDIR /nodesoap

COPY . .
RUN npm ci

RUN npm run build

FROM node:13.8.0-alpine
RUN mkdir -p /nodesoap
WORKDIR /nodesoap
COPY --from=builder /nodesoap/build .
COPY --from=builder /nodesoap/package*.json ./


ENV NODE_ENV=production 
RUN npm ci
EXPOSE 8000
USER node
CMD ["node", "index.js"]