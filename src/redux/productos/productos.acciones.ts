import {
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LISTAR_PRODUCTOS,
  TiposAccionesProducto
} from './productos.tipos-acciones';
import { Producto } from '../../componentes/productos/modelo/Producto';
import { ProductoRepositorio } from './productos.repositorio';

export function listarProductos(productos: Array<Producto>, cantidadTotalProducto: number): TiposAccionesProducto {
  return {
    type: LISTAR_PRODUCTOS,
    payload: productos,
    cantidadTotalProducto: cantidadTotalProducto
  };
}

export function agregarNuevoProducto(producto: Producto): TiposAccionesProducto {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto

  };
}

export function eliminarProducto(producto: Producto): TiposAccionesProducto {
  return {
    type: ELIMINAR_PRODUCTO,
    payload: producto

  };
}

export function listarProductosAsync(numeroPagina: number) {
  return function (dispacth: any) {
    ProductoRepositorio.consultarPorPagina(numeroPagina).then((respuesta: any) =>
        dispacth(listarProductos(respuesta.data.articles, respuesta.data.articlesCount))
    );
  };
}
