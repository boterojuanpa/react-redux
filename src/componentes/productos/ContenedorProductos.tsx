import React, { useEffect } from 'react';
import { ListaProductos } from './ListaProductos';
import { AgregarProducto } from './AgregarProducto';
import { Producto } from './Producto';
import { connect } from "react-redux";
import { agregarNuevoProducto, eliminarProducto, listarProductosAsync } from "../../redux/productos/productos.acciones"
import { PaginadorProductos } from './PaginadorProductos';
import { EstadoGeneral } from '../../redux/EstadoGeneral';



interface ContenedorProductosProps {
    productos: Array<Producto>,
    listarProductos: (numeroPagina: number) => void
    agregarNuevoProducto: (productos: Producto) => void,
    eliminarProducto: (productos: Producto) => void,
    cantidadTotalProducto: number
}

const ContenedorProductos: React.FC<ContenedorProductosProps> = (props) => {

    const { productos, cantidadTotalProducto, listarProductos } = props;
    
    useEffect(() => {
        listarProductos(1);
      }, [listarProductos]);

    

    return (
        <React.Fragment>
            <ListaProductos productos={productos} onClickEliminarProducto={props.eliminarProducto} />
            <AgregarProducto onClickAgregarProducto={props.agregarNuevoProducto} />
            <PaginadorProductos cantidadTotalProductos={cantidadTotalProducto} onClickCambiarPagina={listarProductos} />
        </React.Fragment>
    );
}


const mapStateToProps = (state: EstadoGeneral) => {
    return state.productos;
};

export default connect(
    mapStateToProps,
    {
        listarProductos: listarProductosAsync,
        agregarNuevoProducto: agregarNuevoProducto,
        eliminarProducto: eliminarProducto
    }
)(ContenedorProductos);
