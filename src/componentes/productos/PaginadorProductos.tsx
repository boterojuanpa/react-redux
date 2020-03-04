import React from 'react'

interface props {
    cantidadTotalProductos: number,
    onClickCambiarPagina: (numeroPagina: number) => void
}

const PRODUCTOS_VISIBLES_POR_PAGINA = 10;
export class PaginadorProductos extends React.Component<props, any> {


    render() {
        const { onClickCambiarPagina, cantidadTotalProductos } = this.props;

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

}