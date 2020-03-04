import axios from 'axios'

export const axiosIntance = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
    timeout: 30000,
    headers: { 'X-Custom-Header': 'foobar' }
});