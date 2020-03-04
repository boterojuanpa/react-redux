import React from 'react'
import { Producto } from './Producto';

interface EliminarProductoProps {
    producto: Producto,
    onClickEliminarProducto: (productos: Producto) => void
}

export const EliminarProducto: React.FC<EliminarProductoProps> = (props) => {

    const { onClickEliminarProducto, producto } = props;

    return (
        <button onClick={() => onClickEliminarProducto(producto)}>
            X
        </button>

    );


}