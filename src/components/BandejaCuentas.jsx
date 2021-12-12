import { useState, useEffect } from 'react'
// import TransfModal from './TransfModal'

import Axios from 'axios'

export function CuentasPorAprovar({ data }) {
	// const [showModal, setShowModal] = useState(false)
	const [accPend, setAccPend] = useState([])

	async function userAccounts() {
		const accounts = await Axios.post(`${process.env.REACT_APP_URL}/getAccounts`, {
			activeUser: JSON.parse(localStorage.getItem("banAgrario")).userSession,
			fetchBy: "estado"
		})

		let cont = 0
		let listaCuentas = []
		accounts.data.forEach(e => {
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

	useEffect(() => {
		userAccounts()
	}, [])

	async function handleAprobar(id) {
		const opeOut = await Axios.post(`${process.env.REACT_APP_URL}/exeChangeState`, {
			id
		})

		if (opeOut === 1) {
			userAccounts()
		}
		// console.log(opeOut.data)
	}

	function handleDenegar() {

	}

	// const handleReclamo = (event) => {
	// 	// 	setShowModal(true)
	// 	// 	console.log(showModal)
	// 	// 	console.log('showModal')
	// 	event.preventDefault()
	// }

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
						accPend.map((acc) => (
							<tr key={acc.id}>
								<td>{acc.fecha}</td>
								<td>{acc.cuenta}</td>
								<td>${acc.saldo}</td>
								<td>{acc.cliente}</td>
								<td>
									<button type="button" class="btn btn-warning" onClick={() => handleAprobar(acc.id)}>Aprobar</button>
								</td>
								<td>
									<button type="button" class="btn btn-warning" onClick={handleDenegar}>Denegar</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}