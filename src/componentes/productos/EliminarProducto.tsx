import React from 'react'
import { Producto } from './Producto';

interface props {
    producto: Producto,
    onClickEliminarProducto: (productos: Producto) => void
}

export class EliminarProducto extends React.Component<props, any> {

    render(){
        const {onClickEliminarProducto, producto} = this.props;

        return(
            <button onClick={()=>onClickEliminarProducto(producto)}>
                X
            </button>

        );
    }

}