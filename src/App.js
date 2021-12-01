import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

import { Landing } from './components/Landing';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { Error } from './components/ErrorPage';
import { TableFull } from './components/TableFull';
import { Cuentas } from './components/Cuentas';
import { Registro } from './components/Registro';

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
				<Route path="/login" element={
					<div>
						<Login />
						<Registro />
					</div>
				} />
				<Route path="/cliente/*" element={<TableFull />} >
					<Route path='Cuentas'
						element={
							<div className="col-8">
								<Cuentas />
							</div>}
					/>
					<Route path='Transferencias'
						element={
							<div className="col-8">
								Transferencias
							</div>}
					/>
					<Route path='Reclamos'
						element={
							<div className="col-8">
								Reclamos
							</div>}
					/>
					<Route path='NuevaCuenta'
						element={
							<div className="col-8">
								Nueva Cuenta
							</div>}
					/>
				</Route>
				<Route path="*" element={<Error />} /> {/* Debe estar de ultima */}
			</Routes>
			<NavBar className={navStyles.prueba} />
		</BrowserRouter>
	);
}
