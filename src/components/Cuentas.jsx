import TransfModal from './TransfModal'
import { useEffect, useState } from 'react'
import Axios from 'axios'

const URL = process.env.REACT_APP_URL

const Cuentas = ({ data }) => {
	const handleCancelar = (event) => {
		event.preventDefault()
		console.log("cancel")
	}

	// prueba
	const [listUsers, setListUsers] = useState([])
	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [username, setUsername] = useState('')

	useEffect(() => {
		console.log(`URLGET: ${URL}/getUsers`)
		Axios.get(`${URL}/getUsers`)
			.then((response) => {
				setListUsers(response.data)
			})
	}, [])

	const updateNombre = (e) => {
		setName(e.target.value)
	}
	const updateEdad = (e) => {
		setAge(e.target.value)
	}
	const updateUsername = (e) => {
		setUsername(e.target.value)
	}

	const handleSenttoDB = () => {
		console.log(`URLPOST: ${URL}/createUser`)
		Axios.post(`${URL}/createUser`, {
			name: name,
			age: age,
			username: username
		})
			.then((response) => {
				console.log(`Usuario creado ${response}`)
			})
	}
	// prueba
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
									<button type="button" class="btn btn-danger" onClick={handleCancelar}>Cancelar</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
			{/* Prueba */}
			{listUsers.map((user) => {
				return (
					<div>
						<h1>{user.name}</h1>
						<h1>{user.age}</h1>
						<h1>{user.username}</h1>
					</div>
				)
			})}

			<form>
				<input type="text" placeholde="nombre" onChange={updateNombre}></input>
				<input type="number" placeholde="edad" onChange={updateEdad}></input>
				<input type="text" placeholde="username" onChange={updateUsername}></input>
				<button type="submit" onClick={handleSenttoDB}></button>
			</form>
			{/* Prueba */}
		</div>
	)
};

export { Cuentas };