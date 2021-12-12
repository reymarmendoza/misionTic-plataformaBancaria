const mongoose = require('mongoose')

// estandarizar los documentos de la db
const UserSchema = new mongoose.Schema({
	// defino cada uno de los campos y sus atributos en la bd
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	username: {
		type: String,
		required: true
	}
})

// (nombre de la coleccion[en la db], esquema que se va a aplicar a ella)
// si se cambia en server/index.js aqui debo cambiarla tambien
// const UserModel = mongoose.model("users", UserSchema)
const UserModel = mongoose.model("clientes", UserSchema)

module.exports = { UserModel }