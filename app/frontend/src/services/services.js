import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3305' });

export default api;