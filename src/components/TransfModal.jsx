import React, { useState } from "react";
import Modal from "../utils/modal"
import { useModal } from "../utils/useModal"

const TransfModal = ({ cuenta, saldo }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false)
	const [destino, setDestino] = useState('')
	const [montoTransf, setMontoTransf] = useState(0)
	const [origen, setOrigen] = useState('');
	const [aviso, setAviso] = useState('');

	let comision = montoTransf * 0.01;
	let totalADescontar = montoTransf + comision;

	function sendMoney(e) {
		alert(`Se te descontará ${totalADescontar} para transferir ${montoTransf} debido a la comisión del 1% del banco`)

		closeModal();
		e.preventDefault();
	}

	function updateOrigen(e) {
		setOrigen(e.target.value)
	}

	function updateDestino(e) {
		setDestino(e.target.value)
	}

	function updateMontoTransf(e) {
		setMontoTransf(parseFloat(e.target.value));
		if (saldo < totalADescontar) {
			setAviso('No posees saldo suficiente (comision = 1%)');
		} else {
			setAviso('');			
		}
	}

	return (
		<div>
			<button class="btn btn-warning" onClick={openModal}>Transferir</button>

			<Modal isOpen={isOpenModal} closeModal={closeModal}>

				<form onSubmit={sendMoney}>
					<div className="row">
						<label htmlFor="origen" className="form-label">Por favor confirme la cuenta origen</label>
						<input type="text" className="form-control" name="origen"
							value={origen} placeholder={cuenta} onChange={updateOrigen}>
						</input>
					</div>

					<div className="row">
						<label htmlFor="destino" className="form-label">Por favor confirme la cuenta destino</label>
						<input type="text" className="form-control" name="destino"
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

export default TransfModal