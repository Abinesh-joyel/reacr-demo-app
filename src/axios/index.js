import axios from 'axios';

const url = 'http://localhost:3004';

export const http = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});
