import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { PaginadorProductos } from "../../componentes/productos/PaginadorProductos";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Renderizar con menos de 10 productos no debe pintar botones", () => {
    act(() => {
        render(<PaginadorProductos cantidadTotalProductos={9} onClickCambiarPagina={()=> {}} />, container);
    });
    expect(container.textContent).toBe("");

});

it("Renderizar con  20 productos debe pintar 2 botones", () => {
    act(() => {
        render(<PaginadorProductos cantidadTotalProductos={20} onClickCambiarPagina={()=> {}} />, container);
    });
    expect(container.querySelector("[data-testid='boton-paginar0']").textContent).toBe("1");
    expect(container.querySelector("[data-testid='boton-paginar1']").textContent).toBe("2");
    expect(container.querySelector("[data-testid='boton-paginar2']")).toBe(null);

});