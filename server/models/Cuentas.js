const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	numDoc: {
		type: Number,
		required: true
	},
	numCuenta: {
		type: String,
		required: true
	},
	estado: {
		type: String,
		enum: ['activa', 'desactivada', 'pendiente', 'rechazada'],
		required: true
	},
	balance: {
		type: Number,
		required: true
	}
})

const CuentasModel = mongoose.model("cuentas", schema)

module.exports = { CuentasModel }