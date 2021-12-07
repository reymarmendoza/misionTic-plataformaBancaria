import React, { useState, useEffect } from "react";
import Modal from "../utils/modal"
import { useModal } from "../utils/useModal";
import { Link } from 'react-router-dom';

const RegTransModal = ({ tipoUsr, s }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false)
	const [origen, setOrigen] = useState('');
	const [destino, setDestino] = useState('');
	const [montoTransf, setMontoTransf] = useState(0);	
	const [totalADescontar, setTotalADescontar] = useState(0);
	const [aviso, setAviso] = useState('');
	const [saldo, setSaldo] = useState(0);

	function updateOrigen(e) {
		setOrigen(parseInt(e.target.value))
	}

	// useEffect(() => {
	// 	let cuenta = cuentas.find(cta => cta.idCuenta === origen)
		
	// 	if (cuenta) {
	// 		setSaldo(cuenta.saldo)
	// 		setAviso('')
	// 	} else {
	// 		setAviso('No existe esa cuenta de origen');
	// 	}
	// }, [cuentas, origen])

	function updateDestino(e) {
		setDestino(parseInt(e.target.value));
	}

	// useEffect(() => {
	// 	let cuenta = cuentas.find(cta => cta.idCuenta === destino)
		
	// 	if (!cuenta) {
	// 		setAviso('No existe esa cuenta de destino');
	// 	} else {
	// 		setAviso('');
	// 	}
	// }, [cuentas, destino])

	function updateMontoTransf(e) {
		setMontoTransf(parseFloat(e.target.value));
	}

	useEffect(() => {
		setTotalADescontar(montoTransf * 1.01);
	}, [montoTransf])

	useEffect(() => {
		if (saldo < totalADescontar) {
			setAviso('No posees saldo suficiente (comision = 1%)');
		} else if (totalADescontar < 0) {
			setAviso('No puedes transferir montos menores a cero');
		} else {
			setAviso('');			
		}
	}, [saldo, totalADescontar])

	// function sendMoney(e) {
	// 	alert(`Se te descontará ${totalADescontar} para transferir ${montoTransf} debido a la comisión del 1% del banco`)
	// 	let ctaOrigen = cuentas.find(cta => cta.idCuenta === origen);
	// 	let ctaDestino = cuentas.find(cta => cta.idCuenta === destino);
	// 	if (ctaOrigen && ctaDestino && saldo >= totalADescontar && totalADescontar >= 0 ){
	// 		ctaOrigen.saldo -= totalADescontar;
	// 		ctaDestino.saldo += montoTransf;
	// 	} else {
	// 		alert('No podemos procesar tu solicitud');
	// 	}
	// 	closeModal();
	// 	e.preventDefault();
	// }

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

				<form >
					<div className="row">
						<label htmlFor="origen" className="form-label">Por favor confirme la cuenta origen</label>
						<input type="number" className="form-control" name="origen"
							value={origen} onChange={updateOrigen}>
						</input>
					</div>

					<div className="row">
						<label htmlFor="destino" className="form-label">Por favor confirme la cuenta destino</label>
						<input type="number" className="form-control" name="destino"
							value={destino} onChange={updateDestino}>
						</input>
					</div>

					<div className="row">
						<label htmlFor="montoTransf" className="form-label">Monto a depositar</label>
						<input type="number" className="form-control" name="montoTransf"
							value={montoTransf} onChange={updateMontoTransf}>
						</input>
					</div>

					{Boolean(aviso) && <div className="form-text">{aviso}</div>}

					<button type="submit">Enviar</button>
				</form>

			</Modal>
		</div>
	)
}

export default RegTransModal;