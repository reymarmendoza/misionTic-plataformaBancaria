import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import { Login } from './components/Login'
import { NavBar } from './components/NavBar'
import { Error } from './components/ErrorPage'
import { TableFull } from './components/TableFull'

import appStyles from './Styles/root.module.css'
import navStyles from './Styles/navbar.module.css'
import logStyles from './Styles/login.module.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App" className={appStyles.root}>
        <NavBar className={navStyles} />
      </div>
      <Routes>
        {/* Aqui se crean las rutas, para usar el link al componente, se usa link y el path que especifique aqui */}
        <Route path="/" />
        <Route path="/login" element={<Login className={logStyles} />} />
        <Route path="/TableFull" element={<TableFull />} />
        {/* Debe estar de ultima */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}