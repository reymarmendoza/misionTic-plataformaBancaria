import TransfModal from './TransfModal'
import CancelCtaModal from './CancelCtaModal'

const Cuentas = ({ data }) => {
	const handleCancelar = (event) => {
		event.preventDefault()
		console.log("cancel")
	}

	return (
		<div>
			<p>
				Cuentas de {data[0].datos.nombre}
			</p>
			<br />
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
						data[0].cuentas.map((e) => (
							<tr>
								<th scope="row">{e.idCuenta}</th>
								<td>$ {e.saldo}</td>
								<td>
									<TransfModal cuenta={e.idCuenta} saldo={e.saldo} />
								</td>
								<td>
									<CancelCtaModal cuenta={e.idCuenta} saldo={e.saldo} />
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