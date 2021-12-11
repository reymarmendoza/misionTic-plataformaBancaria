const mongoose = require("mongoose")

const schema = new mongoose.Schema({
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
		type: Date,
		default: () => Date.now(),
	},
	monto: {
		type: Number,
		required: true
	},
	estado: {
		type: String,
		enum: ['Aceptada', 'Rechazada', 'Disputa'],
		required: true
	}
})

const TransaccionesModel = mongoose.model("transacciones", schema)

module.exports = { TransaccionesModel }