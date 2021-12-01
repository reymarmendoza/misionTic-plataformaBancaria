import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MIN_PWD = 8;
const MAX_PWD = 15;
const REG_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REG_PWD_VAR = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{${MIN_PWD},${MAX_PWD}}$`;
const REG_PWD = new RegExp(REG_PWD_VAR);

const Login = () => {
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMail, setErrMail] = useState('');
	const [errPwd, setErrPwd] = useState('');
	const [errGral, setErrGral] = useState('');

	const changeHandlerEmail = (event) => {
		setEmail(event.target.value);
		const isValid = REG_EMAIL.test(event.target.value.toLowerCase());

		isValid ? setErrMail('') : setErrMail('Email no valido');
	};

	const changeHandlerPwd = (event) => {
		setPwd(event.target.value);
		const isValid = REG_PWD.test(event.target.value);

		isValid ? setErrPwd('') : setErrPwd('La contraseña debe tener al menos una mayuscula, un numero, un caracter especial y una longitud de entre 8 y 15 caracteres');
	};

	// cambiar el onclick de email, pwd para que evalue antes de hacer submit
	// const validateFields = () => {
	// 	changeHandlerEmail;
	// 	changeHandlerPwd;
	// }

	const submitHandler = (event) => {
		event.preventDefault();
		/*
		const localStorageUsers = localStorage.getItem('GRUPO1_V1');
		let parsedUser;

		if (!localStorageUsers) {
			localStorage.setItem("GRUPO1_V1", JSON.stringify([]));
			parsedUser = [];
		} else {
			parsedUser = JSON.parse(localStorageUsers);
		}

		const numUsers = Object.keys(parsedUser).length;

		if (email === '' || pwd === '') {
			setErrGral('Los campos email y contraseña son requeridos');
		} else if (errMail !== '') {
			setErrGral('No es un email valido');
		} else if (errPwd !== '') {
			setErrGral('No es una contraseña valida');
		} else {

			let credentialsMatch = false;

			for (let i = 0; i < numUsers; i++) {
				if (parsedUser[i]["email"] == email && parsedUser[i]["pwd"] == pwd) {
					parsedUser[i]["log"] = !parsedUser[i]["log"];
					credentialsMatch = true;
					setErrGral('');
					alert('Bienvenido!!!');
				}
			}

			if (!credentialsMatch) {
				setErrGral('Usuario y/o contraseña incorrecta');
			}
		}
		*/
	};

	return (
		<div className="container">
			<div class="row col-12 justify-content-center">
				<div class="card col-sm-12 col-md-6" id="loginCard">
					<div class="card-body">
						<form className="col-sm-12 col-md-9 col-lg-6 mx-auto" onSubmit={submitHandler}>

							<div className="row">
								<label htmlFor="email" className="col-12 col-form-label">E-mail: &nbsp; </label>
								<div className="col-12">
									<input className="italicFont" type="email" name="email" id="email" value={email} placeholder="janedoe@email.com" className="form-control" onChange={changeHandlerEmail} required />
									{Boolean(errMail) && <div className="form-text">{errMail}</div>}
								</div>
							</div>

							<div className="row">
								<label htmlFor="pwd" className="col-12 col-form-label">Contraseña: &nbsp; </label>
								<div className="col-12">
									<input className="italicFont" type="password" name="pwd" id="pwd" value={pwd} placeholder="********" className="form-control" onChange={changeHandlerPwd} required />
									{Boolean(errPwd) && <div className="form-text">{errPwd}</div>}
								</div>
							</div>

							<div className="row">
								<label className="col-form-label"></label>
								<div className="col-12">
									<Link to="/cliente">
										<button type="submit" className="btn btn-primary">Ingresar</button>
										{Boolean(errGral) && <div className="form-text">{errGral}</div>}
									</Link>
								</div>
							</div>

						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Login };