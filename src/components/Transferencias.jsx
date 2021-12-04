import React, { useState } from 'react';
import TransfModal from './TransfModal';

const Transferencias = ({ data }) => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = (event) => {
		event.preventDefault();
		setShowModal(true);
		console.log(showModal);
		console.log('showModal');
	};

	return (
		<div>
			<p>
				Transferencias de cuenta # {data[0].cuentas[0].idCuenta} desde dd/mm/aaaaa al dd/mm/aaaa
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
									<button type="button" class="btn btn-warning" onClick={handleShowModal}>Reclamar</button>
									{showModal ? <TransfModal /> : null}
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