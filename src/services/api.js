import axios from 'axios';

// Instância do Axios
const api = axios.create({
    baseURL: 'https://api.github.com/'
});

export default api;