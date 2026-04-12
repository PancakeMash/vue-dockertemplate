FROM node:25-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk add --no-cache git
RUN npm install -g pnpm
RUN pnpm install -g corepack@latest
RUN corepack enable
EXPOSE ${INTERNAL_PORT}

WORKDIR /app
COPY . .

COPY package*.json ./

RUN pnpm install

RUN pnpm run build