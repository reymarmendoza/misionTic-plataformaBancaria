const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	nombre: {
		type: String,
		lowercase: true,
		required: true
	},
	correo: {
		type: String,
		lowercase: true,
		required: true
	},
	tipoDoc: {
		type: String,
		lowercase: true,
		required: true
	},
	numDoc: {
		type: Number,
		required: true
	},
	ciudad: {
		type: String,
		lowercase: true,
		required: true
	},
	direccion: {
		type: String,
		lowercase: true,
		required: true
	},
	pwd: {
		type: String,
		required: true
	},
	terminos: {
		type: Boolean,
		required: true
	},
	fechaExpDoc: {
		type: Date,
		required: true
	},
	fechaNacimiento: {
		type: Date,
		required: true
	}
})

const RegistroModel = mongoose.model("clientes", schema)

module.exports = { RegistroModel }