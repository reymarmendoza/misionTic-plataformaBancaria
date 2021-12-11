const mongoose = require("mongoose")

const schema = new mongoose.Schema({
	numDoc: {
		type: Number,
		required: true
	},
	numCuenta: {
		type: Number,
		required: true
	},
	estado: {
		type: String,
		enum: ['Activa', 'Desactivada', 'Pendiente', 'Rechazada'],
		required: true
	},
	balance: {
		type: Number,
		required: true
	}
})

const CuentasModel = mongoose.model("Cuentas", schema)

module.exports = { CuentasModel }