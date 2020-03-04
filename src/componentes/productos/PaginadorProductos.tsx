import React from 'react'

interface PaginadorProductosProps {
    cantidadTotalProductos: number,
    onClickCambiarPagina: (numeroPagina: number) => void
}

const PRODUCTOS_VISIBLES_POR_PAGINA = 10;
export const PaginadorProductos: React.FC<PaginadorProductosProps> = (props) => {


    const { onClickCambiarPagina, cantidadTotalProductos } = props;

    if (cantidadTotalProductos <= PRODUCTOS_VISIBLES_POR_PAGINA) {
        return null;
    }

    const rango = [];
    for (let i = 0; i < Math.ceil(cantidadTotalProductos / PRODUCTOS_VISIBLES_POR_PAGINA); ++i) {
        rango.push(i);
    }

    return (
        <nav>
            {
                rango.map(index => {
                    return (
                        <button data-testid={"boton-paginar" + index}
                            onClick={() => onClickCambiarPagina(index)}
                            key={index.toString()}>
                            {index + 1}
                        </button>
                    );
                })
            }
        </nav>
    );
}

