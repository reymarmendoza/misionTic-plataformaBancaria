import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

import data from './utils/data';

import { Landing } from './components/Landing';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { Error } from './components/ErrorPage';
import { TableFull } from './components/TableFull';
import { Cuentas } from './components/Cuentas';
import { Transferencias } from './components/Transferencias';
import { NuevaCuenta } from './components/NuevaCuenta';
import { CuentasPorAprovar } from './components/BandejaCuentas';
import { Registro } from './components/Registro';
import { GestionarEmpleado } from './components/GestionarEmpleado';
import { Reclamos } from './components/Reclamos';

import appStyles from './styles/root.module.css'
import navStyles from './styles/navbar.module.css'
import logStyles from './styles/login.module.css'

export default function App() {
	const [fechaInicio, setFechaInicio] = useState('');
	const [fechaFin, setFechaFin] = useState('');
	const [idCuenta, setIdCuenta] = useState(0);

	const updateHandler = (newFechaInicio, newFechaFin, newIdCuenta) => {
		setFechaInicio(newFechaInicio);
		setFechaFin(newFechaFin);
		setIdCuenta(newIdCuenta);
	}

	useEffect(() => {
		setFechaInicio(fechaInicio);
		setFechaFin(fechaFin);
		setIdCuenta(idCuenta);
	}, [fechaInicio, fechaFin, idCuenta])

	return (
		<>
			<BrowserRouter>
				<NavBar className={navStyles.prueba} />

				<Routes>
					<Route path="/" element={
						<div>
							<Landing />
						</div>
					} />

					<Route path="/login" element={
						<div className="row">
							<div className="col-12 col-lg-6">
								<Login />
							</div>
							<div className="col-12 col-lg-6">
								<Registro />
							</div>
						</div>
					} />
					<Route path="/cliente/*" element={<TableFull onUpdate={updateHandler}
						fechaInicio={fechaInicio} fechaFin={fechaFin} idCuenta={idCuenta} />} >
						<Route path='Cuentas'
							element={
								<div className="col-8">
									<Cuentas data={data} />
								</div>}
						/>
						<Route path='Transferencias'
							element={
								<div className="col-8">
									<Transferencias data={data} fechaInicio={fechaInicio} fechaFin={fechaFin} idCuenta={idCuenta} />
								</div>}
						/>
						<Route path='Reclamos'
							element={
								<div className="col-8">
									<Reclamos data={data} />
								</div>}
						/>
						<Route path='NuevaCuenta'
							element={
								<div className="col-8">
									<NuevaCuenta />
								</div>}
						/>
					</Route>

					<Route path="/empleado/*" element={<TableFull />} >
						<Route path='Depositos'
							element={
								<div className="col-8">
									<Cuentas data={data} />
								</div>}
						/>
						<Route path='ManejodeCuentas'
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
						<Route path='BandejaCuentas'
							element={
								<div className="col-8">
									<CuentasPorAprovar data={data} />
								</div>}
						/>
					</Route>

					<Route path="/administrador/" element={<TableFull />}>
						<Route path='GestionarEmpleado'
							element={
								<div className="col-8">
									<GestionarEmpleado />
								</div>}
						/>
					</Route>

					<Route path="*" element={<Error />} />

				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}
