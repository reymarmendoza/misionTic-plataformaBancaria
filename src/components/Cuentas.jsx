import TransfModal from './TransfModal'
import CancelCtaModal from './CancelCtaModal'

const Cuentas = ({ data }) => {

	return (
		<div>
			<p>
				Cuentas de {data[0].datos.nombre}
			</p>
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
						data[0].cuentas.map((e) => {
							let opacity = 100, dis = false;
							if (e.estado !== "activa") {
								opacity =  25;
								dis = true;
							}
							
							return (
								<tr className={`text-body text-opacity-${opacity}`}>
									<th scope="row">{e.idCuenta}</th>
									<td>$ {e.saldo.toFixed(2)}</td>
									<td>
										<TransfModal cuentas={data[0].cuentas} id={e.idCuenta} dis={dis} />
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
};

export { Cuentas };