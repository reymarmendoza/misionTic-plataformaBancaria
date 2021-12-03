import React, { useState } from 'react';
import Modal from './Modals';

// const lista = [
// 	{
// 		idTransf: 101,
// 		fecha: "2021-10-12",
// 		ctaOrigen: 2,
// 		ctaDestino: 3,		
// 		monto: 650,
// 		reclamo: false
// 	},
// 	{
// 		idTransf: 102,
// 		fecha: "2021-08-06",
// 		ctaOrigen: 2,
// 		ctaDestino: 1,		
// 		monto: 45850,
// 		reclamo: false
// 	},
// 	{
// 		idTransf: 105,
// 		fecha: "2021-07-20",
// 		ctaOrigen: 1,
// 		ctaDestino: 2,		
// 		monto: 6500000,
// 		reclamo: false
// 	},
// 	{
// 		idTransf: 113,
// 		fecha: "2021-09-15",
// 		ctaOrigen: 3,
// 		ctaDestino: 1,		
// 		monto: 48700000,
// 		reclamo: false
// 	},
// ];

const lista = [
	{
		idTransf: 101,
		fecha: "2021-10-12",
		ctaOrigen: 2,
		ctaDestino: 3,
		monto: 650,
		reclamo: false
	},
	{
		idTransf: 102,
		fecha: "2021-08-06",
		ctaOrigen: 2,
		ctaDestino: 1,
		monto: 45850,
		reclamo: false
	},
	{
		idTransf: 105,
		fecha: "2021-07-20",
		ctaOrigen: 1,
		ctaDestino: 2,
		monto: 6500000,
		reclamo: false
	},
	{
		idTransf: 113,
		fecha: "2021-09-15",
		ctaOrigen: 3,
		ctaDestino: 1,
		monto: 48700000,
		reclamo: false
	},
];

const Transferencias = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = (event) => {
		event.preventDefault();
		setShowModal(true);
		console.log(showModal);
		console.log('showModal');
	};

	const handleCancelar = (event) => {
		event.preventDefault();
		console.log("cancel");
	}

	return (
		<div>
			<p>
				Transferencias de cuenta #... desde dd/mm/aaaaa al dd/mm/aaaa
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
						lista.map((e) => (
							<tr>
								<th scope="row">{e.idTransf}</th>
								<td>{e.fecha}</td>
								<td>{e.ctaOrigen}</td>
								<td>{e.ctaDestino}</td>
								<td>$ {e.monto}</td>
								<td>
									<button type="button" class="btn btn-warning" onClick={handleShowModal}>Reclamar</button>
									{showModal ? <Modal /> : null}
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