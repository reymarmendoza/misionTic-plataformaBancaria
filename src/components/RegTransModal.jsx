import React, { useState, useEffect } from "react";
import Modal from "../utils/modal"
import { useModal } from "../utils/useModal";
import { Link } from 'react-router-dom';

const RegTransModal = ({ tipoUsr, s, fechaInicio, fechaFin, idCuenta, onUpdate }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false)
	const [aviso, setAviso] = useState('');

	function changeFechaInicioHandler(e) {
		onUpdate(e.target.value, fechaFin, idCuenta);
	}

	function changeFechaFinHandler(e) {
		onUpdate(fechaInicio, e.target.value, idCuenta);
	}

	function changeIdCuentaHandler(e) {
		onUpdate(fechaInicio, fechaFin, e.target.value);
	}

	function searchTransfers(e) {
		alert(`Se buscará desde ${fechaInicio} hasta ${fechaFin} de la cuenta ${idCuenta}`)
	// 	let ctaOrigen = cuentas.find(cta => cta.idCuenta === origen);
	// 	let ctaDestino = cuentas.find(cta => cta.idCuenta === destino);
	// 	if (ctaOrigen && ctaDestino && saldo >= totalADescontar && totalADescontar >= 0 ){
	// 		ctaOrigen.saldo -= totalADescontar;
	// 		ctaDestino.saldo += montoTransf;
	// 	} else {
	// 		alert('No podemos procesar tu solicitud');
	// 	}
		closeModal();
		e.preventDefault();
	}

	return (
		<div>
			<li>
				<Link to={`/${tipoUsr}/${s}`}>
					<a href={`/${tipoUsr}/${s}`} className="nav-link link-dark" onClick={openModal}>
						<svg className="bi me-2" width="16" height="16"><use></use></svg>
						{s}
					</a>
				</Link>
			</li>

			<Modal isOpen={isOpenModal} closeModal={closeModal}>

				<form to={`/${tipoUsr}/${s}`}>
					<div className="row">
						<label htmlFor="origen" className="form-label">Fecha inicial de busqueda</label>
						<input type="date" className="form-control" name="origen"
							value={fechaInicio} onChange={changeFechaInicioHandler}>
						</input>
					</div>

					<div className="row">
						<label htmlFor="destino" className="form-label">Fecha final de busqueda</label>
						<input type="date" className="form-control" name="destino"
							value={fechaFin} onChange={changeFechaFinHandler}>
						</input>
					</div>

					<div className="row">
						<label htmlFor="montoTransf" className="form-label">Cuenta a consultar</label>
						<input type="number" className="form-control" name="montoTransf"
							value={idCuenta} onChange={changeIdCuentaHandler}>
						</input>
					</div>

					{Boolean(aviso) && <div className="form-text">{aviso}</div>}

					<button type="submit" onClick={searchTransfers}>Enviar</button>
				</form>

			</Modal>
		</div>
	)
}

export default RegTransModal;