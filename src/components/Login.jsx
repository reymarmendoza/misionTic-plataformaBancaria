import React, {useState} from 'react';
// import '../../node_modules/boostrap/dist/css/boostrap.min.css';
// import 'boostrap/dist/css/boostrap.min.css';

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
        if (email === '' || pwd === ''){
            setErrGral('Los campos email y contrasea son requeridos')
        } else if (errMail !== ''){
            setErrGral('No es un email valido')
        } else if (errPwd !== ''){
            setErrGral('No es una contraseña valida')
        } else if (email !== 'admin@banagrario.com' || pwd !== 'Abcd/123'){
            setErrGral('Usuario y/o contraseña incorrecta')
        } else {
            setErrGral('');
            alert('Bienvenido!!!');
        }        
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='email'>E-mail: *</label>
            <input type='email' name='email' value={email} onChange={changeHandlerEmail} />
            {Boolean(errMail) && <p>{errMail}</p>}
            <label htmlFor='pwd'>Contraseña: *</label>
            <input type='password' name='pwd' value={pwd} onChange={changeHandlerPwd} />
            {Boolean(errPwd) && <p>{errPwd}</p>}
            <input type='submit' value='Ingresar' />
            {Boolean(errGral) && <p>{errGral}</p>}
        </form>
    )
}

export default Login;