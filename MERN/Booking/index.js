const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = '@33f$%^sdfg123'

// to parse incoming request and returning an object
app.use(express.json())

app.use(cors({
	credentials: true,
	origin: 'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_URL)

// TEST
app.get('/test', (req, res) => {
	res.json('test ok')
})



// REGISTER
app.post('/register', async (req, res) => {
	const {name, email, password} = req.body

	try {
		const userDoc = await User.create({
			name,
			email,
			password: bcrypt.hashSync(password, bcryptSalt),
		})
		res.json(userDoc)
	} catch (e) {
		res.status(422).json(e)
	}
})


// LOGIN
app.post('/login', async (req, res) => {
	const {email, password} = req.body
	const userDoc = await User.findOne({email})

	if (userDoc) {
		const passOK = bcrypt.compareSync(password, userDoc.password)
		if (passOK) {
			jwt.sign({email: userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
				if (err) throw err;
				res.cookie('token', token).json('pass ok token oks')
			})
		} else res.status(422).json('pass not ok')
	} else {
		res.json('not found')
	}
})


app.listen(4000)