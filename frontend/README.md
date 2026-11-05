# Portal do Allicode: front-end

Esta pasta é o front-end do portal: o site que a pessoa vê e clica no navegador. É feito com React, Vite e TypeScript, usa React Router para a navegação e Axios para chamar a API do back-end.

Hoje há apenas rotas provisórias (Home, Cursos, Login e página de "não encontrada"), sem conteúdo real.

## Como rodar

- **Com Docker:** na raiz do repositório, rode `docker compose up --build`. O site abre em http://localhost:5173.
- **Sem Docker:** nesta pasta, copie `.env.example` para `.env` e rode `npm install` e `npm run dev`. O site abre em http://localhost:5173.

O passo a passo completo, para cada sistema operacional, está no [README da raiz](../README.md#como-rodar-o-projeto-localmente).

## Scripts

| Comando                | O que faz                                         |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Sobe o servidor de desenvolvimento com hot reload |
| `npm run build`        | Confere os tipos e gera o build em `dist/`        |
| `npm run preview`      | Serve localmente o build gerado                   |
| `npm run lint`         | Procura problemas no código com o Oxlint          |
| `npm run format`       | Formata o código com o Prettier                   |
| `npm run format:check` | Confere se o código está formatado                |

## Variáveis de ambiente

| Variável       | Exemplo                 | Para que serve              |
| -------------- | ----------------------- | --------------------------- |
| `VITE_API_URL` | `http://localhost:3000` | Endereço da API do back-end |

O Vite embute essa variável no site no momento do build. Com Docker, ela já vem definida no `docker-compose.yml`.

Voltar para o [README da raiz](../README.md).
