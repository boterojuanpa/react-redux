import { axiosIntance } from '../../config/axios.config';


const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;


export const ProductoRepositorio = {
    consultarPorPagina: (page) => axiosIntance.get(`/articles?${limit(10, page)}`)
}
