import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { Login } from './components/Login'
import { NavBar } from './components/NavBar'
import { Error } from './components/ErrorPage'
import { TableFull } from './components/TableFull'

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
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/tableFull" element={<TableFull />} />
        <Route path="*" element={<Error />} /> {/* Debe estar de ultima */}
      </Routes>
      <NavBar className={navStyles.prueba} />
    </BrowserRouter>
  );
}