import Modal from "./Modal"
import { useModal } from "./useModal"

const Modals = () => {
	const [isOpenModal, openModal, closeModal] = useModal(false)

	return (
		<div>
			{/* <h2>Modales</h2> */}
			<button onClick={openModal}>Modal 1</button>
			<Modal isOpen={isOpenModal} closeModal={closeModal}>
				<h3>Modal 1</h3>
				<p>Hola mundo</p>
				<img src="https://placeimg.com/400/400/animals" alt="animals" />
			</Modal>
		</div>
	)
}

export default Modals