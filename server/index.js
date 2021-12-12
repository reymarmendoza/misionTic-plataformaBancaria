require('dotenv').config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { MongoClient } = require('mongodb')

const { CuentasModel } = require("./models/Cuentas")
const { RegistroModel } = require("./models/Registro")
const URL = `mongodb+srv://${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}@banagrario.57kdk.mongodb.net/${process.env.REACT_APP_DB}?retryWrites=true&w=majority`
const app = express()

app.use(express.json())
app.use(cors())

app.post("/createUser", async (req, res) => {
	const user = req.body
	const newUser = new RegistroModel(user)
	let result

	mongoose.connect(URL)

	try {
		await newUser.save().then(() => {
			result = "Creating User succeed"
		})
	} catch (e) {
		result = "Saving account failed"
	}

	res.send(result)
})
/*
app.post("/createTransaction", async (req, res) => {
	const tran = req.body
	const newTran = new TransaccionesModel(tran)

	try {
		await newTran.save()
	} catch (e) {
		console.log("Transaction Failed: " + e)
	}

	res.json(tran)
})
*/
app.post("/createAccount", async (req, res) => {
	const acc = req.body
	const newAcc = new CuentasModel(acc)
	let result

	mongoose.connect(URL)

	try {
		await newAcc.save().then(() => {
			result = "Saving account succeed"
		})
	} catch (e) {
		result = "Saving account failed"
		console.log("Account failed: " + e)
	}

	res.send(result)
})

async function loginDataMatch(client, { user, pass }) {
	const result = await client.db(process.env.REACT_APP_DB).collection("clientes")
		.findOne({
			correo: user,
			pwd: pass
		})

	return result ? { typeUser: result.tipoUsuario, userSession: result.numDoc } : { typeUser: "noExiste" }
}

app.post("/routeUser", async (req, res) => {
	const client = new MongoClient(URL)

	try {
		await client.connect()
		const usuarioLogIn = await loginDataMatch(client, req.body)

		switch (usuarioLogIn.typeUser) {
			case "cliente":
				return res.status(200).send({ userSession: usuarioLogIn.userSession, url: "cliente" })
			case "empleado":
				return res.status(200).send({ userSession: usuarioLogIn.userSession, url: "empleado" })
			case "administrador":
				return res.status(200).send({ userSession: usuarioLogIn.userSession, url: "administrador" })
			default:
				return res.status(401).send({ userSession: "Usuario y/o contraseña no validos" })
		}
	} catch (e) {
		console.error(e)
	} finally {
		await client.close()
	}
})

app.post("/getAccounts", async (req, res) => {
	const activeUser = req.body.activeUser
	const DBField = req.body.fetchBy
	let datadb

	mongoose.connect(URL)

	if (DBField === "documento") {
		try {
			await CuentasModel.find({ numDoc: activeUser }).exec()
				.then((result) => {
					datadb = result
				})
		} catch (e) {
			console.log("getAccountsByDocumento failed: " + e)
		}
	} else if (DBField === "estado") {
		try {
			await CuentasModel.find({ estado: "pendiente" }).exec()
				.then((result) => {
					datadb = result
				})
		} catch (e) {
			console.log("getAccountsByEstado failed: " + e)
		}
	}

	res.json(datadb)
})

app.post("/exeChangeState", async (req, res) => {
	mongoose.connect(URL)
	let resMsg = ''

	try {
		await CuentasModel.updateOne(
			{ _id: req.body.id },
			{ $set: { estado: "activa" } }
		)
			.then((response) => {
				resMsg = "exeChangeState succeed"
			})
	} catch (error) {
		resMsg = "exeChangeState failed"
	}

	res.send(resMsg)
})

app.listen(3001, () => {
	console.log("Server is running")
})