import * as React from "react";
import { PaginadorProductos } from "../../componentes/productos/PaginadorProductos";
import { mount } from "enzyme";

describe('PaginadorComponentes Test', () => {

  it("Renderizar con menos de 10 productos no debe pintar botones", () => {
    const wrapper = mount(<PaginadorProductos cantidadTotalProductos={9}
                                              onClickCambiarPagina={() => {
                                              }}/>);

    expect(wrapper.text()).toBe("");
  });

  it("Renderizar con  20 productos debe pintar 2 botones", () => {
    const wrapper = mount(<PaginadorProductos cantidadTotalProductos={20}
                                              onClickCambiarPagina={() => {
                                              }}/>);
    expect(wrapper.find("[data-testid='boton-paginar0']").text()).toBe("1");
    expect(wrapper.find("[data-testid='boton-paginar1']").text()).toBe("2");
    expect(wrapper.find("[data-testid='boton-paginar2']").exists()).toBeFalsy();

  });

});
