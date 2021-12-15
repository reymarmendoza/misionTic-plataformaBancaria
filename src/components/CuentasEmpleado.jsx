import { useEffect, useState } from 'react'
import Axios from 'axios'

import TransfModal from './TransfModal'
import CancelCtaModal from './CancelCtaModal'

const CuentasEmpleado = ({ data }) => {
	const [cuentasUser, setCuentasUser] = useState([])

	useEffect(() => {
		const activeUser = JSON.parse(localStorage.getItem("banAgrario")).userSession
		// (function(){
		// 	// some code…
		//  })();
		async function userAccounts() {
			const accounts = await Axios.post(`${process.env.REACT_APP_URL}/getAccountsByUser`, {
				activeUser
			})

			let cont = 0
			let listaCuentas = []
			accounts.data.forEach(e => {
				// SE DEBE CAMBIAR POR EL CONTRARIO ES SOLO PARA PRUEBAS ************************
				if (e.estado === "pendiente") {
					listaCuentas[cont++] = {
						cuenta: e.numCuenta,
						saldo: e.balance,
						id: e._id
					}
				}
			})

			setCuentasUser(listaCuentas)
		}

		userAccounts()

	}, [])

	return (
		<div>
			{/* <p>
				Cuentas de PEPE
			</p> */}
			<br />
			<table className="table table-hover">
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
						cuentasUser.map((e) => {
							let opacity = 100, dis = false;
							// SE DEBE CAMBIAR POR EL CONTRARIO ES SOLO PARA PRUEBAS ************************
							// if (e.estado !== "activa") {
							if (e.estado === "activa") {
								opacity = 25;
								dis = true;
							}

							return (
								<tr className={`text-body text-opacity-${opacity}`}>
									{/* <tr> */}
									<th scope="row">{e.cuenta}</th>
									<td>$ {e.saldo.toFixed(2)}</td>
									<td>
										<TransfModal cuentas={cuentasUser} id={e.cuenta} dis={dis} />
									</td>
									<td>
										<CancelCtaModal cuenta={e} dis={dis} />
									</td>
								</tr>
							);
							// }
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export { CuentasEmpleado }