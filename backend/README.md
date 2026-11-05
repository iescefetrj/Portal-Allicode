# Portal do Allicode: back-end

Esta pasta é o back-end do portal: a API (o conjunto de endereços que o front-end chama) que vai guardar e entregar os dados. É feito com NestJS e TypeScript.

Hoje é o projeto NestJS inicial: só responde "Hello World!" em `GET /`. O banco de dados ainda não foi definido.

## Como rodar

- **Com Docker:** na raiz do repositório, rode `docker compose up --build`. A API responde em http://localhost:3000.
- **Sem Docker:** nesta pasta, rode `npm install` e `npm run start:dev`. A API responde em http://localhost:3000.

O passo a passo completo, para cada sistema operacional, está no [README da raiz](../README.md#como-rodar-o-projeto-localmente).

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run start:dev` | Sobe a API e reinicia a cada mudança |
| `npm run start` | Sobe a API sem reiniciar a cada mudança |
| `npm run build` | Compila o código para `dist/` |
| `npm run start:prod` | Roda a versão compilada em `dist/` |
| `npm run lint` | Procura problemas no código com o Oxlint |
| `npm run format` | Formata o código com o Prettier |
| `npm run format:check` | Confere se o código está formatado |
| `npm test` | Roda os testes com o Vitest |
| `npm run test:e2e` | Roda os testes de ponta a ponta |

## Variáveis de ambiente

| Variável | Padrão | Para que serve |
| --- | --- | --- |
| `PORT` | `3000` | Porta em que a API escuta |

Ainda não há arquivo `.env.example` nesta pasta.

Voltar para o [README da raiz](../README.md).
