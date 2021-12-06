import React, { useState } from "react";
import Modal from "../utils/modal"
import { useModal } from "../utils/useModal"

const TransfModal = ({ cuenta, saldo }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false);

	function cancelCta(e) {
		alert(`En la brevedad un asesor confirmara la cancelacion de la cuenta ${cuenta}`)

		closeModal();
		e.preventDefault();
	}

	return (
		<div>
			<button class="btn btn-danger" onClick={openModal}>Cancelar</button>

			<Modal isOpen={isOpenModal} closeModal={closeModal}>

				<form onSubmit={cancelCta}>
					<div className="row">
						<label htmlFor="origen" className="form-label">
							{`Por favor confirme que quiere cancelar la cuenta ${cuenta}`}
						</label>
					</div>

					<button type="submit">Aceptar</button>
				</form>

			</Modal>
		</div>
	)
}

export default TransfModal