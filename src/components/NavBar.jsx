import React from 'react';

let NavBar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Banco_Agrario_de_Colombia_logo.svg/100px-Banco_Agrario_de_Colombia_logo.svg.png" width="30" height="30" alt="" />
                Banagrario
            </a>
            <form class="form-inline">
                {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                <button class="btn btn-success my-2 my-sm-0" type="submit">
                    Ingresar / Cerrar Sesion
                </button>
            </form>
        </nav>
    )
}

export { NavBar };