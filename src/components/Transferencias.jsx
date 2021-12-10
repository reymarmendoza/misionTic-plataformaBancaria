import React, { useState } from 'react';
import TransfModal from './TransfModal';

const Transferencias = ({ data, fechaInicio, fechaFin, idCuenta }) => {
	const [showModal, setShowModal] = useState(false);

	const handleReclamo = (event) => {
	// 	setShowModal(true);
	// 	console.log(showModal);
	// 	console.log('showModal');
		event.preventDefault();
	};

	return (
		<div>
			<p>
				Transferencias de cuenta # {idCuenta} desde {fechaInicio} al {fechaFin}
			</p>
			<br />
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col"># Transferencia</th>
						<th scope="col">Fecha</th>
						<th scope="col">Cta Origen</th>
						<th scope="col">Cta Destino</th>
						<th scope="col">Monto</th>
						<th scope="col">Reclamar</th>
					</tr>
				</thead>
				<tbody>
					{
						data[0].cuentas[0].transferencias.map((e) => (
							<tr>
								<th scope="row">{e.idTransf}</th>
								<td>{e.fecha}</td>
								<td>{e.ctaOrigen}</td>
								<td>{e.ctaDestino}</td>
								<td>$ {e.monto}</td>
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
};

export { Transferencias };