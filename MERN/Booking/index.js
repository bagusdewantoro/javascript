const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express()

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = '@33f$%^sdfg123'

// to parse incoming request and returning an object
app.use(express.json())

// to read cookies here
app.use(cookieParser())

app.use(cors({
	credentials: true,
	origin: 'http://localhost:5173'
}))


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
			jwt.sign(
				{email: userDoc.email, id:userDoc._id}, 
				jwtSecret, 
				{}, 
				(err, token) => {
					if (err) throw err;
					res.cookie('token', token).json(userDoc)
				}
			)
		} else res.status(422).json('pass not ok')
	} else {
		res.json('not found')
	}
})


// PROFILE
app.get('/profile', (req, res) => {
	const {token} = req.cookies
	if (token) {
		jwt.verify(token, jwtSecret, {}, async (err, userData) => {
			if (err) throw err
			
			// Grab user name from the ID from cookie we send:
			const {name, email, _id} = await User.findById(userData.id)

			res.json({name, email, _id})	
		})
	} else {
		res.json(null)
	}
})


// LOGOUT
app.post('/logout', (req, res) => {
	res.cookie('token', '').json(true)
})


mongoose.connect(process.env.MONGO_URL)
	.then(() => app.listen(4000, () => {
		console.log('connected to DB and running at 4000')
	}))