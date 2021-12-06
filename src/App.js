import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

import data from './utils/data';

import { Landing } from './components/Landing';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { Error } from './components/ErrorPage';
import { TableFull } from './components/TableFull';
import { Cuentas } from './components/Cuentas';
import { Transferencias } from './components/Transferencias';
import { Registro } from './components/Registro';

import appStyles from './styles/root.module.css'
import navStyles from './styles/navbar.module.css'
import logStyles from './styles/login.module.css'

export default function App() {

	return (
		<>
			<BrowserRouter>
				<div className="App" className={appStyles.root}>
					<NavBar className={navStyles.prueba} />
				</div>

				<Routes>
					<Route path="/" element={
						<div>
							<Landing />
						</div>
					} />

					<Route path="/login" element={
						<div className="row">
							<Login />
							<Registro />
						</div>
					} />
					<Route path="/cliente/*" element={<TableFull />} >
						<Route path='Cuentas'
							element={
								<div className="col-8">
									<Cuentas data={data} />
								</div>}
						/>
						<Route path='Transferencias'
							element={
								<div className="col-8">
									<Transferencias data={data} />
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

					<Route path="*" element={<Error />} />

				</Routes>

				<NavBar className={navStyles.prueba} />
			</BrowserRouter>
		</>
	);
}
