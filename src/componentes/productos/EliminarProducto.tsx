import * as React from 'react'
import { Producto } from './modelo/Producto';
import * as PropTypes from 'prop-types'

interface EliminarProductoProps {
  producto: Producto,
  onClickEliminarProducto: (productos: Producto) => void
}

export const EliminarProducto: React.FC<EliminarProductoProps> = (props) => {

  const {onClickEliminarProducto, producto} = props;

  return (
      <button onClick={() => onClickEliminarProducto(producto)}>
        X
      </button>

  );
};

EliminarProducto.propTypes = {
  producto: PropTypes.instanceOf(Producto).isRequired,
  onClickEliminarProducto: PropTypes.func.isRequired,
};
