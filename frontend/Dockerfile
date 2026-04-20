FROM node:25-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk add --no-cache git
RUN npm install -g pnpm

ARG CI=true

RUN pnpm install -g corepack@latest
RUN corepack enable

WORKDIR /app

COPY . .

COPY package*.json ./

RUN pnpm install 

RUN pnpm run build