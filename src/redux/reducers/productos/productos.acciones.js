import { LISTAR_PRODUCTOS, AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO} from "./productos.tipos-acciones";

export const listarProductos = productos => ({
  type: LISTAR_PRODUCTOS,
  payload: {
    productos
  }
});

export const agregarNuevoProducto = producto => ({
    type: AGREGAR_PRODUCTO,
    payload: {
      producto
    }
  });

  export const eliminarProducto = producto => ({
    type: ELIMINAR_PRODUCTO,
    payload: {
      producto
    }
  });