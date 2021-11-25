import React, { useState } from 'react';

const MIN_PWD = 8;
const MAX_PWD = 15;
const REG_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REG_PWD_VAR = `^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{${MIN_PWD},${MAX_PWD}}$`;
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

		if (isValid) setErrMail('');
		else setErrMail('Email no valido')
	};

	const changeHandlerPwd = (event) => {
		setPwd(event.target.value);
		const isValid = REG_PWD.test(event.target.value);

		if (isValid) setErrPwd('');
		else setErrPwd('Contraseña no valida. Debe tener al menos una mayuscula, una minuscula, un numero y un caracter especial. Su longitud debe estar entre 8 y 15 caracteres')
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (email === '' || pwd === '') {
			setErrGral('Los campos email y contrasea son requeridos')
		} else if (errMail !== '') {
			setErrGral('No es un email valido')
		} else if (errPwd !== '') {
			setErrGral('No es una contraseña valida')
		} else if (email !== 'admin@banagrario.com' || pwd !== 'Abcd/123') {
			setErrGral('Usuario y/o contraseña incorrecta')
		} else {
			setErrGral('');
			alert('Bienvenido!!!');
		}
	};

	return (
		<div className="container text-center">
			<div class="row justify-content-center">
				<div class="card col-sm-12 col-md-6">
					<div class="card-body">
						<form className="col-sm-12 col-md-9 col-lg-6 mx-auto" id="loginForm" onSubmit={submitHandler}>

							<div className="row">
								<label htmlFor="email" className="col-12 col-form-label">E-mail: &nbsp; </label>
								<div className="col-12">
									<input type="email" name="email" id="email" value={email}
										className="form-control" onChange={changeHandlerEmail} required />
									{Boolean(errMail) && <div className="form-text">{errMail}</div>}
								</div>
							</div>

							<div className="row">
								<label htmlFor="pwd" className="col-12 col-form-label">Contraseña: &nbsp; </label>
								<div className="col-12">
									<input type="password" name="pwd" id="pwd" value={pwd}
										className="form-control" onChange={changeHandlerPwd} required />
									{Boolean(errPwd) && <div className="form-text">{errPwd}</div>}
								</div>
							</div>

							<div className="row">
								<label className="col-form-label"></label>
								<div className="col-12">
									<button type="submit" className="btn btn-primary">Ingresar</button>
									{Boolean(errGral) && <div className="form-text">{errGral}</div>}
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