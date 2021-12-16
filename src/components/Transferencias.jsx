import { useState, useEffect } from 'react'

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
		} catch (error) {
			console.log("getTransactions", error)
		}
	}

	async function createReclamosTask(numTran) {
		try {
			const reclamo = await Axios.post(`${process.env.REACT_APP_URL}/createReclamo`, {
				numTransf: numTran
			})
			createReclamosTask(numTran)
		} catch (error) {
			console.log("markClaimStatus", error)
		}
	}

	async function markClaimStatus(numTran) {
		try {
			// updateTransaccionesStatus(numTran)
			createReclamosTask(numTran)
		} catch (error) {
			console.log("markClaimStatus", error)
		}
	}

	useEffect(() => {
		getTransactions(JSON.parse(localStorage.getItem("banAgrario")))
	}, [])

	const handleReclamo = async (event) => {
		event.preventDefault()
		await markClaimStatus(event.target.id)
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
							<tr key={e.id}>
								<td>{e.numTransf}</td>
								<td>{e.fecha}</td>
								<td>{e.fuente}</td>
								<td>{e.destino}</td>
								<td>$ {e.monto}</td>
								<td>{e.tipoTrans}</td>
								<td>
									<button type="button" class="btn btn-warning" id={e.numTransf} onClick={handleReclamo}>Reclamar</button>
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