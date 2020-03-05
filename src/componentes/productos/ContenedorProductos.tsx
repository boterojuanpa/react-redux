import * as React from 'react';
import { ListaProductos } from './ListaProductos';
import { AgregarProducto } from './AgregarProducto';
import { connect } from "react-redux";
import {
  agregarNuevoProducto,
  eliminarProducto,
  listarProductosAsync
} from "../../redux/productos/productos.acciones"
import { PaginadorProductos } from './PaginadorProductos';
import { EstadoGeneral } from '../../redux/EstadoGeneral';
import { Producto } from './modelo/Producto';
import * as PropTypes from 'prop-types'

interface Props {
  productos: Array<Producto>,
  listarProductos: (numeroPagina: number) => void
  agregarNuevoProducto: (productos: Producto) => void,
  eliminarProducto: (productos: Producto) => void,
  cantidadTotalProducto: number
}

class ContenedorProductos extends React.Component<Props, any> {

  static propTypes = {
    productos: PropTypes.array.isRequired,
    listarProductos: PropTypes.func.isRequired,
    agregarNuevoProducto: PropTypes.func.isRequired,
    eliminarProducto: PropTypes.func.isRequired,
    cantidadTotalProducto: PropTypes.number.isRequired,
  }

  componentDidMount() {
    this.props.listarProductos(1);
  }

  render() {

    const {productos, cantidadTotalProducto, listarProductos} = this.props;

    return (
        <React.Fragment>
          <ListaProductos productos={productos}
                          onClickEliminarProducto={this.props.eliminarProducto}/>
          <AgregarProducto onClickAgregarProducto={this.props.agregarNuevoProducto}/>
          <PaginadorProductos cantidadTotalProductos={cantidadTotalProducto}
                              onClickCambiarPagina={listarProductos}/>
        </React.Fragment>
    );
  }
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
