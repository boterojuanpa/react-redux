import React from 'react'

interface props {
    cantidadTotalProductos: number,
    onClickCambiarPagina: (numeroPagina: number) => void
}

export class PaginadorProductos extends React.Component<props, any> {


    render() {
        const { onClickCambiarPagina, cantidadTotalProductos } = this.props;

        if (cantidadTotalProductos <= 10) {
            return null;
        }

        const rango = [];
        for (let i = 0; i < Math.ceil(cantidadTotalProductos / 10); ++i) {
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