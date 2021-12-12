import Modal from "../utils/modal"
import { useModal } from "../utils/useModal"
import { useNavigate } from 'react-router-dom'

const CancelCtaModal = ({ cuenta, dis }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false)
	const navigate = useNavigate()

	function cancelCta(e) {
		cuenta.estado = "pendiente"
		alert(`En la brevedad un asesor confirmara la cancelacion de la cuenta ${cuenta.idCuenta}`)
		closeModal()
		navigate('/cliente/Cuentas')
		e.preventDefault()
	}

	return (
		<div>
			{Boolean(dis) ?
				<button class="btn btn-danger" onClick={openModal} disabled>Cancelar</button>
				: <button class="btn btn-danger" onClick={openModal}>Cancelar</button>
			}
			<Modal isOpen={isOpenModal} closeModal={closeModal}>

				<form onSubmit={cancelCta}>
					<div className="row">
						<label htmlFor="origen" className="form-label">
							{`Por favor confirme que quiere cancelar la cuenta ${cuenta.idCuenta}`}
						</label>
					</div>

					<button type="submit">Aceptar</button>
				</form>

			</Modal>
		</div>
	)
}

export default CancelCtaModal