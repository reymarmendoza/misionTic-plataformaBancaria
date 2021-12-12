import { useEffect, useState } from 'react'
import Axios from 'axios'

import TransfModal from './TransfModal'
import CancelCtaModal from './CancelCtaModal'

const Cuentas = ({ data }) => {
	const [cuentasUser, setCuentasUser] = useState([])

	async function userAccounts() {
		const accounts = await Axios.post(`${process.env.REACT_APP_URL}/getAccounts`, {
			activeUser: JSON.parse(localStorage.getItem("banAgrario")).userSession,
			fetchBy: "documento"
		})

		let cont = 0
		let listaCuentas = []
		accounts.data.forEach(e => {
			if (e.estado === "activa") {
				listaCuentas[cont++] = {
					cuenta: e.numCuenta,
					saldo: e.balance,
					id: e._id
				}
			}
		})

		setCuentasUser(listaCuentas)
	}

	useEffect(() => {
		userAccounts()
	}, [])

	return (
		<div>
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

							if (e.estado === "activa") {
								opacity = 25;
								dis = true;
							}

							return (
								<tr className={`text-body text-opacity-${opacity}`}>
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
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export { Cuentas }