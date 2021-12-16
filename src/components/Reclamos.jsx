import React from 'react';

const Reclamos = ({ data }) => {

	return (
		<div>
			<p>
				Estos son todos tus reclamos, {JSON.parse(localStorage.getItem("banAgrario")).name.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase()})}
			</p>
			<br />
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col"># Transf. Reclamada</th>
						<th scope="col">Fecha</th>
						<th scope="col">Monto</th>
						<th scope="col">Estado</th>
					</tr>
				</thead>
				<tbody>
					{
						data[0].cuentas[0].transferencias.map((e) => {
							if (e.estadoReclamo){
								return (
									<tr>
										<th scope="row">{e.idTransf}</th>
										<td>{e.fecha}</td>
										<td>$ {e.monto}</td>
										<td>{e.estadoReclamo}</td>
									</tr>
								)
							} else {return null}
						})
					}
				</tbody>
			</table>
		</div>
	)
};

export { Reclamos };