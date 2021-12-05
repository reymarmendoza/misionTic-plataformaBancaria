const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const { UserModel } = require("./models/Users")
const { RegistroModel } = require("./models/Registro")

const app = express()

require('dotenv').config()
// de esta forma habilito la opcion de usar json desde express para poder comunicarme con el server
app.use(express.json())
app.use(cors())

console.log(process.env.USER, process.env.PASSWORD, process.env.DB)
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@banagrario.57kdk.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`)

app.get("/getUsers", (req, res) => {
	// despues de encontrar las coincidencias de la coleccion se ejecutara el callback
	// UserModel.find({}, (error, result) => {
	RegistroModel.find({}, (error, result) => {
		if (error) {
			res.json(error)
		} else {
			// transforma el resultado a json
			res.json(result)
		}
	})
})

app.post("/createUser", async (req, res) => {
	const user = req.body
	const newUser = new RegistroModel(user)

	await newUser.save()
	res.json(user)
})

// port 3001, react usa el 3000; si sale bien =>
app.listen(3001, () => {
	console.log("Server is running")
})