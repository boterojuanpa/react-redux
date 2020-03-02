import React from 'react';
import { Producto } from './Producto';


export interface Props {
    onClickAgregarProducto: (producto: Producto) => void;
}


export class AgregarProducto extends React.Component<Props, any>  {

    onClicAgregarProducto = ()=> {

        this.props.onClickAgregarProducto({
            title: "nuevo",
            slug: "Juan Pablo Botero",
            body: "posting the article accessing using constant",
            createdAt: new Date(),
            updatedAt: new Date()
        })

    }


    render() {
        return (
            <button onClick={this.onClicAgregarProducto}>
                Agregar
            </button>

        )
    }
}