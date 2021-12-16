import { useState, useEffect } from 'react'
// import TransfModal from './TransfModal'
import Axios from 'axios'

const Transferencias = ({ data, fechaInicio, fechaFin, idCuenta }) => {
	const [transferencias, setTransferencias] = useState([])

	async function getTransactions(numDoc) {
		try {
			const accounts = await Axios.post(`${process.env.REACT_APP_URL}/getTransactions`, {
				doc: numDoc.userSession,
				acc: idCuenta
			})

			setTransferencias(accounts.data)
			console.log("accounts", accounts.data)
		} catch (error) {
			console.log("getTransactions", error)
		}
	}

	useEffect(() => {
		getTransactions(JSON.parse(localStorage.getItem("banAgrario")))
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
						<th scope="col"># Transf</th>
						<th scope="col">Fecha</th>
						<th scope="col">Origen</th>
						<th scope="col">Destino</th>
						<th scope="col">Monto</th>
						<th scope="col">Tipo</th>
						<th scope="col">Reclamar</th>
					</tr>
				</thead>
				<tbody>
					{
						transferencias.map((e) => (
							<tr>
								<td>{e.numTransf}</td>
								<td>{(e.fecha).substring(0, (e.fecha).indexOf('T'))}</td>
								<td>{e.fuente}</td>
								<td>{e.destino}</td>
								<td>$ {e.monto}</td>
								<td>{e.tipoTrans}</td>
								<td>
									<button type="button" class="btn btn-warning" onClick={handleReclamo}>Reclamar</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export { Transferencias }