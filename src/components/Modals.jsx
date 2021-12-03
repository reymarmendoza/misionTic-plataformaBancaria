import { useState } from "react"
import Modal from "./Modal"
import { useModal } from "./useModal"

const Modals = ({ cuenta, saldo }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false)
	const [destino, setDestino] = useState('')
	const [montoTransf, setMontoTransf] = useState(saldo)

	function sendMoney(e) {
		e.preventDefault()
		console.log(`Se envio ${montoTransf} a la cuenta ${destino}`)
	}

	return (
		<div>
			<button class="btn btn-warning" onClick={openModal}>Transferir</button>

			<Modal isOpen={isOpenModal} closeModal={closeModal}>
				<h3>{cuenta}</h3>

				<form onSubmit={sendMoney}>
					<div className="row">
						<label htmlFor="destino">Por favor confirme la cuenta destino</label>
						<input type="text" className="destino" name="destino"></input>
					</div>

					<div className="row">
						<label htmlFor="montoTransf">Monto a depositar</label>
						<input type="text" className="montoTransf" name="montoTransf" value={montoTransf}></input>
					</div>

					<button type="submit">Enviar</button>
				</form>

			</Modal>
		</div>
	)
}

export default Modals