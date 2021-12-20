const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	numTransaccion: {
		type: Number,
		unique: true,
	},
	numReclamo: {
		type: Number,
		unique: true,
	}
})

const AutoIncModel = mongoose.model("contadores", schema)

module.exports = { AutoIncModel }