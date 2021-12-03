import React, { useState } from 'react';
import Modals from './Modals';

const lista = [
	{
		idCuenta: 1,
		saldo: 100,
		activa: true
	},
	{
		idCuenta: 2,
		saldo: 943000,
		activa: true
	},
	{
		idCuenta: 3,
		saldo: 2456789,
		activa: false
	},
];

const Cuentas = () => {
	const handleCancelar = (event) => {
		event.preventDefault();
		console.log("cancel");
	}

	return (
		<div>
			{/* <p>
				Cuentas de ...
			</p> 
			<br />*/}
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col"># Cuenta</th>
						<th scope="col">Saldo</th>
						<th scope="col">Transferir</th>
						<th scope="col">Cancelar</th>
					</tr>
				</thead>
				<tbody>
					{
						lista.map((e) => (
							<tr>
								<th scope="row">{e.idCuenta}</th>
								<td>$ {e.saldo}</td>
								<td>
									<Modals cuenta={e.idCuenta} saldo={e.saldo} />
								</td>
								<td>
									<button type="button" class="btn btn-danger" onClick={handleCancelar}>Cancelar</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
};

export { Cuentas };