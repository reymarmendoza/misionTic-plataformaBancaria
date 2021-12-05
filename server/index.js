require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// si se cambia aqui debo cambiar la variable en el resto del file
// const { UserModel } = require("./models/Users")
const { RegistroModel } = require("./models/Registro")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}@banagrario.57kdk.mongodb.net/${process.env.REACT_APP_DB}?retryWrites=true&w=majority`)

app.get("/getUsers", (req, res) => {
	// UserModel.find({}, (error, result) => {
	RegistroModel.find({}, (error, result) => {
		if (error) {
			res.json(error)
		} else {
			res.json(result)
		}
	})
})

app.post("/createUser", async (req, res) => {
	const user = req.body
	// const newUser = new UserModel(user)
	const newUser = new RegistroModel(user)

	await newUser.save()
	res.json(user)
})

// port 3001, react usa el 3000; si sale bien =>
app.listen(3001, () => {
	console.log("Server is running")
})