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
// si la primera vez que se conecta a la bd la coleccion no existe, se va a crear
const UserModel = mongoose.model("users", UserSchema)
// const UserModel = mongoose.model("clientes", UserSchema)

module.exports = { UserModel }