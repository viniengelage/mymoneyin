import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exchangerate.host',
});

export default api;
