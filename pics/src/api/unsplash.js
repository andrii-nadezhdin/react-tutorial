import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 85ab605d65a31270f8957000975a45f8d959114e76251da6709ac7a3a37356e4' }
});