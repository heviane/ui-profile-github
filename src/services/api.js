/*
    Exemplo de uso:
    api.get('/users/diego3g')
*/
import axios from 'axios';

// Cria uma instância do Axios
const api = axios.create({
    baseURL: 'https://api.github.com/'
});

export default api;
