import { useState, useEffect } from 'react';
import TransfModal from './TransfModal';

import Axios from 'axios'

export function CuentasPorAprovar({ data }) {
	const [showModal, setShowModal] = useState(false)
	const [accPend, setAccPend] = useState([])

	useEffect(() => {
		// (function(){
		// 	// some code…
		//  })();
		async function userAccounts() {
			const accounts = await Axios.post(`${process.env.REACT_APP_URL}/getAccounts`, {
				activeUser: JSON.parse(localStorage.getItem("banAgrario")).userSession,
				fetchBy: "estado"
			})

			let cont = 0
			let listaCuentas = []
			accounts.data.forEach(e => {
				// SE DEBE CAMBIAR POR EL CONTRARIO ES SOLO PARA PRUEBAS ************************
				if (e.estado === "pendiente") {
					listaCuentas[cont++] = {
						cliente: e.numDoc,
						fecha: e.fecha,
						cuenta: e.numCuenta,
						saldo: e.balance,
						id: e._id
					}
				}
			})

			setAccPend(listaCuentas)
		}

		userAccounts()

	}, [])

	const handleReclamo = (event) => {
		// 	setShowModal(true)
		// 	console.log(showModal)
		// 	console.log('showModal')
		event.preventDefault()
	}

	return (
		<div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col">Fecha</th>
						<th scope="col"># Cuenta</th>
						<th scope="col">Monto</th>
						<th scope="col">Cliente</th>
						<th scope="col">Aprobar</th>
						<th scope="col">Denegar</th>
					</tr>
				</thead>
				<tbody>
					{
						accPend.map((e) => (
							<tr>
								{/* <th scope="row">{e.idTransf}</th> */}
								<td>{e.fecha}</td>
								<td>{e.cuenta}</td>
								<td>${e.saldo}</td>
								<td>{e.cliente}</td>
								<td>
									<button type="button" class="btn btn-warning" onClick={handleReclamo}>Aprobar</button>
								</td>
								<td>
									<button type="button" class="btn btn-warning" onClick={handleReclamo}>Denegar</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}