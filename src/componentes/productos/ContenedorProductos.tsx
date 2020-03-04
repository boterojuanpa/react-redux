import React, { useEffect } from 'react';
import { ListaProductos } from './ListaProductos';
import { AgregarProducto } from './AgregarProducto';
import { useSelector, useDispatch } from "react-redux";
import { agregarNuevoProducto, listarProductosAsync, eliminarProducto } from "../../redux/productos/productos.acciones"
import { PaginadorProductos } from './PaginadorProductos';
import { EstadoGeneral } from '../../redux/EstadoGeneral';

const ContenedorProductos: React.FC = () => {


    const estadoProductos = useSelector((state: EstadoGeneral) => state.productos);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listarProductosAsync(1));
    }, [dispatch]);



    return (
        <React.Fragment>
            <ListaProductos productos={estadoProductos.productos} onClickEliminarProducto={(producto)=>dispatch(eliminarProducto(producto))}  />
            <AgregarProducto onClickAgregarProducto={(producto) => dispatch(agregarNuevoProducto(producto))} />
            <PaginadorProductos cantidadTotalProductos={estadoProductos.cantidadTotalProducto} onClickCambiarPagina={(pagina) => dispatch(listarProductosAsync(pagina))} />
        </React.Fragment>
    );
}


export default ContenedorProductos;
