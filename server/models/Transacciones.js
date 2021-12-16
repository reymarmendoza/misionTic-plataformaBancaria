const mongoose = require("mongoose")

const schema = new mongoose.Schema({
	docFuente: {
		type: Number,
		required: true
	},
	docDestino: {
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
	monto: {
		type: Number,
		required: true
	},
	cobroBanco: {
		type: Number,
		required: true
	},
	numTransf: {
		type: Number,
		required: true
	},
	fecha: {
		type: Date,
		default: () => Date.now(),
	},
	estado: {
		type: String,
		enum: ['Aceptada', 'Rechazada', 'Disputa'],
		default: () => 'Aceptada'
	}
})

const TransaccionesModel = mongoose.model("transacciones", schema)

module.exports = { TransaccionesModel }