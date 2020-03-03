import React from 'react';
import { ListaProductos } from './ListaProductos';
import AgenteProductos from './AgenteProductos';
import { AgregarProducto } from './AgregarProducto';
import { Producto } from './Producto';
import { connect } from "react-redux";
import { listarProductos, agregarNuevoProducto, eliminarProducto } from "../../redux/reducers/productos/productos.acciones"
import { EstadoProducto } from '../../redux/reducers/productos/EstadoProducto';



interface Props {
    productos: Array<Producto>,
    listarProductos: (productos: Array<Producto>) => void
    agregarNuevoProducto: (productos: Producto) => void,
    eliminarProducto: (productos: Producto) => void
}

class ContenedorProductos extends React.Component<Props, any> {


    componentDidMount() {
        AgenteProductos.Articles.all(2).then((datos: any) =>
            this.props.listarProductos(datos.articles)
        );
    }

    render() {

        const { productos } = this.props;

        return (
            <div>
                <ListaProductos productos={productos} onClickEliminarProducto={this.props.eliminarProducto}></ListaProductos>
                <AgregarProducto onClickAgregarProducto={this.props.agregarNuevoProducto}></AgregarProducto>
            </div>
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
        listarProductos: listarProductos,
        agregarNuevoProducto: agregarNuevoProducto,
        eliminarProducto: eliminarProducto
    }
)(ContenedorProductos);
