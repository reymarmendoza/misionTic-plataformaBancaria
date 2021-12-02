import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
	return (
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
				<Link to="/">
					<a class="navbar-brand" href="/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Banco_Agrario_de_Colombia_logo.svg/100px-Banco_Agrario_de_Colombia_logo.svg.png" width="30" height="30" alt="" class="d-inline-block align-text-top" />
						Banagrario
					</a>
				</Link>
				<Link to="/login">
					<button class="btn btn-success my-2 my-sm-0" type="submit">
						Ingresar
					</button>
				</Link>
			</div>
		</nav>
	)
}