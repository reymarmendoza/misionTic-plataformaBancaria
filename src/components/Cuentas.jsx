import React from 'react'

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
			activa:true 
		}, 
		{ 
			idCuenta: 2, 
			saldo: 943000, 
			activa:true 
		}, 
		{ 
			idCuenta: 3, 
			saldo: 2456789, 
			activa:true 
		}, 
	];

export function Cuentas() {
	return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
					<th scope="col">#Cta</th>
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
								<button type="button" class="btn btn-warning">Transferir</button>
							</td>
							<td>
								<button type="button" class="btn btn-danger">Cancelar</button>
							</td>								
						</tr>
					))
				}
            </tbody>
        </table>
	)
}