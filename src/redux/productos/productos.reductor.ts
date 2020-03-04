import { LISTAR_PRODUCTOS, AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO, TiposAccionesProducto } from "./productos.tipos-acciones";
import { Producto } from "../../componentes/productos/modelo/Producto";
import { EstadoProducto } from "./EstadoProducto";

const initialState: EstadoProducto = {
  productos: Array<Producto>(),
  cantidadTotalProducto: 0
};

export default function (state = initialState, action: TiposAccionesProducto): EstadoProducto {
  switch (action.type) {
    case LISTAR_PRODUCTOS: {
      const  productos  = action.payload;
      return {
        ...state,
        productos: productos,
        cantidadTotalProducto: action.cantidadTotalProducto
      };
    }
    case AGREGAR_PRODUCTO: {
      const producto = action.payload;
      return {
        ...state,
        productos: [...state.productos, producto],
      };
    }

    case ELIMINAR_PRODUCTO: {
      const producto = action.payload;
      return {
        ...state,
        productos: [...state.productos.filter(p=> p.title !== producto.title)],
      };
    }

    default:
      return state;
  }
}
