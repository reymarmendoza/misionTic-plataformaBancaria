import React, {useState} from 'react';

const MINEMAIL = 5;
const MAXEMAIL = 30;
const GROUPEMAIL = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
//  {${MINEMAIL},${MAXEMAIL}}`;
// const VALIDATEEMAIL = new RegExp(`^${GROUPEMAIL} (${GROUPEMAIL})*$`);
const VALIDATEEMAIL = new RegExp(GROUPEMAIL);
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const Login = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMail, setErrMail] = useState('');

    const changeHandlerEmail = (event) => {
        setEmail(event.target.value);
        // const isValid = VALIDATEEMAIL.test(event.target.value);
        const isValid = re.test(event.target.value.toLowerCase());

        if (isValid) setErrMail('');
        else setErrMail('Email no valido')
    };

    const changeHandlerPwd = (event) => setPwd(event.target.value);
    
    const submitHandler = (event) => {
        event.preventDefault();
        alert('Bienvenido: ' + email);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='email'>E-mail: </label>
            <input type='email' name='email' value={email} onChange={changeHandlerEmail} />
            {Boolean(errMail) && <p>{errMail}</p>}
            <label htmlFor='pwd'>Contraseña: </label>
            <input type='pwd' name='pwd' value={pwd} onChange={changeHandlerPwd} />
            <input type='submit' value='Ingresar' />
        </form>
    )
}

export default Login;