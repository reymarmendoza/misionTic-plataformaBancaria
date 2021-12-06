import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Login = () => {
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [pwd, setPwd] = useState('')
	const [errGral, setErrGral] = useState('')

	const changeHandlerEmail = (event) => {
		setEmail(event.target.value)
	}

	const changeHandlerPwd = (event) => {
		setPwd(event.target.value)
	}

	const submitHandler = async (event) => {
		event.preventDefault()
		let credentialsMatch = false

		await Axios.get(`${process.env.REACT_APP_URL}/getUsers`)
			.then((response) => {
				response.data.forEach((userLog) => {
					if (userLog.correo === email && userLog.pwd === pwd) {
						console.log(userLog.correo, userLog.pwd)
						credentialsMatch = true
					}
				})
			})
			.catch((error) => {
				console.log(error)
			})

		if (!credentialsMatch) {
			setErrGral('Usuario y/o contraseña incorrecta')
		} else {
			console.log("Datos correctos")
			navigate('/cliente')
		}
	}

	return (
		<div>
			<form className="p-3 my-3 mx-auto" onSubmit={submitHandler}>

				<div className="row">
					<label htmlFor="email" className="col-12 col-form-label">E-mail:</label>
					<div className="col-12">
						<input type="email" name="email" id="email" value={email} placeholder="janedoe@email.com" className="form-control" onChange={changeHandlerEmail} required />
					</div>
				</div>

				<div className="row">
					<label htmlFor="pwd" className="col-12 col-form-label">Contraseña:</label>
					<div className="col-12">
						<input type="password" name="pwd" id="pwd" value={pwd} placeholder="********" className="form-control" onChange={changeHandlerPwd} required />
					</div>
				</div>

				<div className="row">
					<label className="col-form-label"></label>
					<div className="col-12">
						<button type="submit" className="btn btn-primary">Ingresar</button>
						{Boolean(errGral) && <div className="form-text">{errGral}</div>}
					</div>
					<label className="col-form-label"></label>
				</div>

			</form>
		</div>
	)
}

export { Login }