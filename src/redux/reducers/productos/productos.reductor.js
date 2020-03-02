import { LISTAR_PRODUCTOS, AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO } from "./productos.tipos-acciones";

const initialState = {
  productos: []

};

export default function (state = initialState, action) {
  switch (action.type) {
    case LISTAR_PRODUCTOS: {
      const { productos } = action.payload;
      return {
        ...state,
        productos: productos,
      };
    }
    case AGREGAR_PRODUCTO: {
      const { producto } = action.payload;
      return {
        ...state,
        productos: [...state.productos, producto],
      };
    }

    case ELIMINAR_PRODUCTO: {
      const { producto } = action.payload;
      return {
        ...state,
        productos: [...state.productos.filter(p=> p.title !== producto.title)],
      };
    }

    default:
      return state;
  }
}
