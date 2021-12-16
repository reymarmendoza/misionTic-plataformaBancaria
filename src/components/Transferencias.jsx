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

	useEffect(() => {
		return null;
	}, [transferencias])

	async function createReclamosTask(numTran) {
		let res = ''

		try {
			res = await Axios.post(`${process.env.REACT_APP_URL}/createReclamo`, {
				numTransf: numTran
			})
		} catch (error) {
			console.log("markClaimStatus", error)
		}

		return res.data === "succeed" ? 1 : 0
	}
	/* ESTAMOS AQUI */
	async function updateTransaccionesStatus(numTran) {
		let res = ''

		try {
			res = await Axios.post(`${process.env.REACT_APP_URL}/updateTransfEstado`, {
				numTransf: numTran
			})
		} catch (error) {
			console.log("markClaimStatus", error)
		}

		return res.data === "succeed" ? 1 : 0
	}

	async function markClaimStatus(numTran) {
		let verifier = 0
		const OK = 2

		try {
			verifier += await updateTransaccionesStatus(numTran)
			verifier += await createReclamosTask(numTran)
		} catch (error) {
			console.log("markClaimStatus", error)
		}

		return verifier === OK ? "saved" : "error"
	}

	useEffect(() => {
		getTransactions(JSON.parse(localStorage.getItem("banAgrario")))
	}, [])

	const handleReclamo = async (event) => {
		event.preventDefault()

		try {
			// console.log("handleReclamo:", await markClaimStatus(event.target.id))
			await markClaimStatus(event.target.id)
		} catch (error) {
			console.log("handleReclamo", error)
		}
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