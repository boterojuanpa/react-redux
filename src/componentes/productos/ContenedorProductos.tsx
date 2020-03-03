import React from 'react';
import { ListaProductos } from './ListaProductos';
import { AgregarProducto } from './AgregarProducto';
import { Producto } from './Producto';
import { connect } from "react-redux";
import {  agregarNuevoProducto, eliminarProducto, listarProductosAsync } from "../../redux/reducers/productos/productos.acciones"
import { EstadoProducto } from '../../redux/reducers/productos/EstadoProducto';



interface Props {
    productos: Array<Producto>,
    listarProductos: () => void
    agregarNuevoProducto: (productos: Producto) => void,
    eliminarProducto: (productos: Producto) => void
}

class ContenedorProductos extends React.Component<Props, any> {


    componentDidMount() {
       this.props.listarProductos();
    }

    render() {

        const { productos } = this.props;

        return (
            <React.Fragment>
                <ListaProductos productos={productos} onClickEliminarProducto={this.props.eliminarProducto}></ListaProductos>
                <AgregarProducto onClickAgregarProducto={this.props.agregarNuevoProducto}></AgregarProducto>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: EstadoProducto) => {
    const { productos } = state;
    return productos;
};

export default connect(
    mapStateToProps,
    {
        listarProductos: listarProductosAsync,
        agregarNuevoProducto: agregarNuevoProducto,
        eliminarProducto: eliminarProducto
    }
)(ContenedorProductos);
