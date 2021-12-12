import Axios from 'axios'

export function NuevaCuenta() {
	function submitData(initialBalance) {
		Axios.post(`${process.env.REACT_APP_URL}/createAccount`, {
			numDoc: JSON.parse(localStorage.getItem("banAgrario")).userSession,
			numCuenta: Math.floor(Math.random() * (1000000 - 1)).toString(),
			estado: "pendiente",
			balance: initialBalance
		})
			.then((response) => {
				console.log("NuevaCuenta" + response.data)
			})
			.catch((error) => {
				console.log("NuevaCuenta" + error)
			})
	}

	function submitHandler(event) {
		event.preventDefault()
		const ammount = event.target.ammount.value

		submitData(ammount)
	}

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="ammount">Ingrese el monto inicial de su cuenta:</label>
			<input type="number" name="ammount" id="ammount" step="10" min="0" required>
			</input>
			<button type="submit">Solicitar cuenta</button>
		</form>
	)
} 