require('dotenv').config()

const express = require("express")
const cors = require("cors")
const { MongoClient } = require('mongodb')

const { RegistroModel } = require("./models/Registro")
const URL = `mongodb+srv://${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}@banagrario.57kdk.mongodb.net/${process.env.REACT_APP_DB}?retryWrites=true&w=majority`
const app = express()

app.use(express.json())
app.use(cors())

async function loginDataMatch(client, { user, pass }) {
	const result = await client.db(process.env.REACT_APP_DB).collection("clientes")
		.findOne({
			correo: user,
			pwd: pass
		})

	return result ? result.tipoUsuario : "noExiste"
}

app.post("/routeUser", async (req, res) => {
	const client = new MongoClient(URL)
	try {
		await client.connect()
		const usuarioLogIn = await loginDataMatch(client, req.body)

		switch (usuarioLogIn) {
			case "cliente":
				return res.status(200).send({ result: "redirect", url: "cliente" })
			case "empleado":
				return res.status(200).send({ result: "redirect", url: "empleado" })
			case "administrador":
				return res.status(200).send({ result: "redirect", url: "administrador" })
			default:
				return res.status(401).send({ result: "Usuario y/o contraseña no validos" })
		}
	} catch (e) {
		console.error(e)
	} finally {
		await client.close()
	}
})

app.post("/createUser", async (req, res) => {
	const user = req.body
	const newUser = new RegistroModel(user)

	try {
		await newUser.save()
	} catch (e) {
		console.log("CreateUser Error: " + e)
	}
	res.json(user)
})

app.listen(3001, () => {
	console.log("Server is running")
})