const User = require('../model/user')
const express = require('express')
const router = express.Router()

//register
router.post('/register', function (req, res) {
	const body = req.body
	const users = new User(body)
	users.save()
		.then((user) => {
			res.send(user)
		})
		.catch(err => res.send({err}))
})

//login
router.post('/login', function (req, res) {
	const body = req.body
	User.findByCredentials(body.email, body.password)
		.then(function (user) {
			return user.generateToken()
		})
		.then((token) => {
			res.setHeader('x-auth', token)
			res.send({token})
		})
		.catch(err => {
			res.send({err})
		})
})


module.exports = { userRouter: router }