# ---------- Estágio de desenvolvimento (servidor do Vite com hot reload) ----------
FROM node:26-alpine AS development
WORKDIR /app

# Instala as dependências primeiro para aproveitar o cache de camadas
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---------- Estágio de build (gera os arquivos estáticos em dist) ----------
FROM development AS build

# O Vite embute as variáveis VITE_* no bundle em tempo de build
ARG VITE_API_URL=http://localhost:3000
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

# ---------- Estágio de produção (nginx servindo os estáticos) ----------
FROM nginx:alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
