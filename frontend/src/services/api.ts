import axios from 'axios';

// Instância única do Axios para comunicação com a API do back-end.
// A URL base vem da variável de ambiente VITE_API_URL (ver .env.example).
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
