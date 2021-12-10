const mongoose = require("mongoose")

const schema = new mongoose.schema({
	numDoc: {
		type: Number,
		required: true
	},
	fuente: {
		type: Number,
		required: true
	},
	destino: {
		type: Number,
		required: true
	},
	fecha: {
		default: () => Date.now(),
	},
	monto: {
		type: Number,
		required: true
	},
	estado: {
		enum: ['Aceptada', 'Rechazada', 'Disputa'],
		required: true
	}
})

const TransaccionesModel = mongoose.model("Transacciones", schema)

export { TransaccionesModel }