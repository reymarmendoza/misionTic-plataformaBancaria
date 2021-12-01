import React, { useState } from 'react';
import Modal from './Modal'; 

// const lista = [ 
// 	{ 
// 		idCuenta: 1, 
// 		saldo: 100, 
// 		log:false 
// 	}, 
// 	{ 
// 		idCuenta: 2, 
// 		saldo: 943000, 
// 		log:false 
// 	}, 
// 	{ 
// 		idCuenta: 3, 
// 		saldo: 2456789, 
// 		log:false 
// 	}, 
// ];

const lista = [
	{
		idCuenta: 1,
		saldo: 100,
		activa: true
	},
	{
		idCuenta: 2,
		saldo: 943000,
		activa: true
	},
	{
		idCuenta: 3,
		saldo: 2456789,
		activa: true
	},
];

const Cuentas = () => {
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
				Cuentas de ...
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
						lista.map((e) => (
							<tr>
								<th scope="row">{e.idCuenta}</th>
								<td>$ {e.saldo}</td>
								<td>
									<button type="button" class="btn btn-warning" onClick={handleShowModal}>Transferir</button>
									{showModal ? <Modal /> : null}
        						</td>
								<td>
									<button type="button" class="btn btn-danger" onClick={handleCancelar}>Cancelar</button>									
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