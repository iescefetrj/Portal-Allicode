# ---------- Estágio de desenvolvimento (Nest em modo watch) ----------
FROM node:26-alpine AS development
WORKDIR /app

# Instala as dependências primeiro para aproveitar o cache de camadas
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# ---------- Estágio de build (compila o TypeScript para dist) ----------
FROM development AS build
RUN npm run build

# ---------- Estágio de produção (apenas dependências de runtime) ----------
FROM node:26-alpine AS production
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist

# Roda como usuário não-root (o usuário "node" já existe na imagem oficial)
USER node

EXPOSE 3000
CMD ["node", "dist/main"]
