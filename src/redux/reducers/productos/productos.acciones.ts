import { LISTAR_PRODUCTOS, AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO, TiposAccionesProducto } from "./productos.tipos-acciones";
import { Producto } from "../../../componentes/productos/Producto";
import AgenteProductos from "../../../componentes/productos/AgenteProductos";

export function listarProductos(productos: Array<Producto>): TiposAccionesProducto {
  return {
    type: LISTAR_PRODUCTOS,
    payload: productos
  };
}

export function agregarNuevoProducto(producto: Producto): TiposAccionesProducto {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto

  }
};

export function eliminarProducto(producto: Producto): TiposAccionesProducto {
  return {
    type: ELIMINAR_PRODUCTO,
    payload: producto

  }
};

export function listarProductosAsync() {
  return function (dispacth: any) {
    AgenteProductos.Articles.all(2).then((datos: any) =>
      dispacth(listarProductos(datos.articles))
    );
  }


}