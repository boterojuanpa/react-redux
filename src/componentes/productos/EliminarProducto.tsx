import React from 'react'
import { Producto } from './Producto';
import { eliminarProducto } from '../../redux/productos/productos.acciones';
import { useDispatch } from 'react-redux';

interface EliminarProductoProps {
    producto: Producto    
}

export const EliminarProducto: React.FC<EliminarProductoProps> = (props) => {

    const {  producto } = props;
    const dispatch = useDispatch();

    return (
        <button onClick={() =>  dispatch(eliminarProducto(producto))}>
            X
        </button>

    );


}