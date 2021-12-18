import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const ReclamosEmpleado = () => {
	const [reclamos, setReclamos] = useState([])

	// async function getTransfer(id) {
	// 	const transfData = await Axios.post(`${process.env.REACT_APP_URL}/getTransById`, {
	// 		transf: id
	// 	});
	// 	return transfData.data[0];
	// }

	async function getClaims() {
		const reclamosData = await Axios.post(`${process.env.REACT_APP_URL}/getReclamosByStatus`, {
			estado: "Pendiente"
		});
		// reclamosData.data.map((e) => {
		// 		const transf = getTransfer(e.numTransf);
				// e = { ...e, ...transf };
			// });
		setReclamos(reclamosData.data);
	};

	useEffect(() => {
		getClaims();
	},[]);

	async function aproveClaim (id, doc) {
		// const opeOut = await Axios.post(`${process.env.REACT_APP_URL}/exeChangeState`, {
		// 	id,
		// 	estado: "activa"
		// })
		// submitData(doc)
		alert(id);
	}

	return (
		<div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col"># Reclamo</th>
						<th scope="col">Fecha</th>
						<th scope="col">Monto</th>
						{/* <th scope="col">Estado</th> */}
						<th scope="col">Accion</th>
					</tr>
				</thead>
				<tbody>
					{
						reclamos.map((e) => {
							if (e.estado === 'Pendiente') {
							return (
								<tr key={e._id}>
									<td>{e.numReclamo}</td>
									<td>{
										(e.fecha).substring(0, (e.fecha).indexOf('T'))
									}</td>
									<td>$ {e.monto}</td>
									{/* <td>{e.estado}</td> */}
									<td>
										<button className='btn btn-success' onClick={() => aproveClaim(e.id, e.doc)}>
											Aprobar
										</button>
										<button className='btn btn-danger' onClick={() => aproveClaim(e.id, e.doc)}>
											Rechazar
										</button>
									</td>
								</tr>
							)
							} else { return null }
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export { ReclamosEmpleado }