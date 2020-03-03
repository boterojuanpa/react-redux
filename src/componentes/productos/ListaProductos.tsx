import React from 'react'
import { Producto } from './Producto';
import { EliminarProducto } from "./EliminarProducto"

export interface Props {
    productos: Array<Producto>,
    onClickEliminarProducto: (productos: Producto) => void
}


export class ListaProductos extends React.Component<Props, any> {


    render() {
        const { productos, onClickEliminarProducto } = this.props;
        return (
            <table>
                <thead>
                    <td>
                        <b>Título</b>
                    </td>
                    <td>
                        <b>Fecha creación</b>
                    </td>
                    <td>
                        <b>Eliminar</b>
                    </td>
                </thead>
                <tbody>
                    {productos.map((producto: Producto) => {
                        return (
                            <tr key={producto.slug}>
                                <td>
                                    {producto.title}
                                </td>
                                <td>
                                    {producto.createdAt + ""}
                                </td>
                                <td>
                                    <EliminarProducto producto={producto} onClickEliminarProducto={onClickEliminarProducto}></EliminarProducto>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        );

    }

}