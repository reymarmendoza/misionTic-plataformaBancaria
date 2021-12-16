let HomePanel = () => {
	return (
		<div className='col-9' >
			<img
				src='https://image.freepik.com/foto-gratis/toma-aerea-hermoso-campo-verde-agricola-cerca-montanas_181624-29589.jpg' height='400px' alt="Farmer collecting cofee from field"
			/>
			<h1 className='display-5 text-center'>
				Te damos la bienvenida a tu Banco Agrario. Hola, {JSON.parse(localStorage.getItem("banAgrario"))
					.name.replace(/\w+/g,
						function (w) {
							return w[0].toUpperCase() + w.slice(1).toLowerCase()
						}
					)}
			</h1>
		</div>
	)
}

export { HomePanel }