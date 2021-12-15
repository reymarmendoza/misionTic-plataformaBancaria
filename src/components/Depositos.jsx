import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Depositos = () => {
	const [aviso, setAviso] = useState('');
	const [cuentas, setCuentas] = useState([]);
	const [aviso2, setAviso2] = useState('');

	let submitData = async (documento) => {
		const accounts = await Axios.post(`${process.env.REACT_APP_URL}/getAccounts`, {
			activeUser: documento,
			fetchBy: "documento"
		})
		let listaCuentas = []
		accounts.data.forEach(e => {
		// 	// SE DEBE CAMBIAR POR EL CONTRARIO ES SOLO PARA PRUEBAS ***********************
			listaCuentas.push({
				cuenta: e.numCuenta,
				saldo: e.balance,
				id: e._id,
				estado: e.estado
			})			
		})
		if (listaCuentas.length === 0) {
			setAviso('No existe cliente o no tiene cuentas activas');
		} else {
			setCuentas(listaCuentas);
			setAviso(`Cuentas del cliente con documento ${documento}`);
		}
	}

	let submitHandler = (event) => {
		const documento = event.target.documento.value;
		submitData(documento)
		event.preventDefault()
	}

	let clickHandler = (event) => {
		
		event.preventDefault()
	}

	return (
		<div>
			<div>
				<form onSubmit={submitHandler}>
					<div className="row mt-2">
						<div className='col'>
							<label className="form-label" htmlFor="documento">Ingrese el documento del cliente:</label>
						</div>	
					</div>
					
					<div className='row'>
						<div className="col-4">
							<input className="form-control" type="number" name="documento" id="documento" min="0" required>
							</input>
						</div>
						<div className="col-8">
							<button className="btn btn-primary" type="submit">Solicitar cuentas del cliente</button>
						</div>
					</div>
				</form>
				<div className="form-text">{aviso}</div>
			</div>
			{Boolean(aviso[0] === 'C') && 
				<div>
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col"># Cuenta</th>
								<th scope="col">Saldo</th>								
							</tr>
						</thead>
						<tbody>
							{cuentas.filter(e => e.estado === 'activa').map(e => {
								return (
									<tr className='text-body'>
										<th scope="row">{e.cuenta}</th>
										<td>$ {e.saldo.toFixed(2)}</td>
										</tr>
								)
							})}
						</tbody>
					</table>
					<form onSubmit={clickHandler}>
						<div className="row mt-2">
							<div className='col'>
								<label className="form-label" htmlFor="documento">Ingrese el numero de cuenta a depositar:</label>
							</div>	
						</div>					
						<div className='row'>
							<div className="col-4">
								<input className="form-control" type="number" name="documento" id="documento" min="0" required>
								</input>
							</div>
						</div>
						<div className="row mt-2">
							<div className='col'>
								<label className="form-label" htmlFor="documento">Ingrese el monto:</label>
							</div>	
						</div>					
						<div className='row'>
							<div className="col-4">
								<input className="form-control" type="number" name="documento" id="documento" min="0" required>
								</input>
							</div>
							<div className="col-8">
									<button className="btn btn-primary" type="submit">Solicitar cuentas del cliente</button>
							</div>						
						</div>
						<div className='row'>
							 {aviso2}
						</div>
					</form>
				</div>
			}			
		</div>
	)
}

export { Depositos }