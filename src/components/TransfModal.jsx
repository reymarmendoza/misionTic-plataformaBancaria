import React, { useState } from "react";
import Modal from "../utils/modal"
import { useModal } from "../utils/useModal"

const TransfModal = ({ cuenta, saldo }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false)
	const [destino, setDestino] = useState('')
	const [montoTransf, setMontoTransf] = useState(saldo)

	function sendMoney(e) {
		alert(`Se envio ${montoTransf} a la cuenta ${destino}`)
		
		closeModal();
		e.preventDefault();
	}

	function updateDestino(e) {
		setDestino(e.target.value)
	}

	function updateMontoTransf(e) {
		setMontoTransf(e.target.value)
	}

	return (
		<div>
			<button class="btn btn-warning" onClick={openModal}>Transferir</button>

			<Modal isOpen={isOpenModal} closeModal={closeModal}>

				<form onSubmit={sendMoney}>
					<div className="row">
						<label htmlFor="origen" className="form-label">Por favor confirme la cuenta origen</label>
						<input type="text" className="form-control" name="destino"
							value={destino} placeholder={cuenta} >
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
						<input type="text" className="form-control" name="montoTransf"
							value={montoTransf} onChange={updateMontoTransf}>
						</input>
					</div>

					<button type="submit">Enviar</button>
				</form>

			</Modal>
		</div>
	)
}

export default TransfModal