import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Login } from './components/Login'
import { NavBar } from './components/NavBar'
import { Error } from './components/ErrorPage'
import { TableFull } from './components/TableFull'
import { Cuentas } from './components/Cuentas'
import { Registro } from './components/Registro'

import appStyles from './Styles/root.module.css'
import navStyles from './Styles/navbar.module.css'
// import logStyles from './Styles/login.module.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App" className={appStyles.root}>
        <NavBar className={navStyles.prueba} />
      </div>
      <Routes>
        {/* Aqui se crean las rutas, para usar el link al componente, se usa link y el path que especifique aqui */}
        <Route exact path="/" />
        <Route path="/login" element={
          <div className="container">
            <Login />
            <Registro />
          </div>
        } />
        <Route path="/usuario/*" element={<TableFull />} >
          <Route path='inicio' element={
            <div className="col-8">
              HOME
            </div>
          } />
          <Route path='ctas' element={
            <div className="col-8">
              <Cuentas />
            </div>
          } />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <NavBar className={navStyles.prueba} />
    </BrowserRouter>
  );
}
