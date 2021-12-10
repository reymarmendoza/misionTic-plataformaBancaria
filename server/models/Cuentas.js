const mongoose = require("mongoose")

const schema = new mongoose.schema({
	numDoc: {
		type: Number,
		required: true
	},
	numCuenta: {
		type: Number,
		required: true
	},
	estado: {
		enum: ['Activa', 'Desactivada', 'Pendiente', 'Rechazada'],
		required: true
	},
	balance: {
		type: Number,
		required: true
	}
})

const CuentasModel = mongoose.model("Cuentas", schema)

export { CuentasModel }