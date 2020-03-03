
import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './componentes/home/Header';
import Home from './componentes/home/Home';
import ContenedorProductos from './componentes/productos/ContenedorProductos';

function App() {
  return (
    <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/productos" component={ContenedorProductos} />
          </Switch>
    </React.Fragment>
  );
}

export default App;
