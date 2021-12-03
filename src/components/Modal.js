import "./Modal.css"

const Modal = ({ children, isOpen, closeModal }) => {
	// stopPropagation evita los eventos del arbol
	const handleModalContainerClick = e => e.stopPropagation()

	return (
		// de esta forma se crea una clase dinamica: {``}, si la variable isOpen ${} es true entonces se va a usar la clase is-open
		<article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalContainerClick}>
				<button class="modal-close" onClick={closeModal}>&times;</button>
				{children}
			</div>
		</article>
	)
}

export default Modal