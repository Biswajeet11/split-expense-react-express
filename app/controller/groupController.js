const express = require('express')
const router = express.Router()
const Group = require('../model/group')

router.get('/groups', function (req, res) {
	Group.find()
		.then((group) => {
			res.send(group)
		})
})


router.post('/groups', function (req, res) {
	const body = req.body
	const groups = new Group(body)

	groups.save()
		.then((group) => {
			res.send({ group })
		})
		.catch((err) => {
			res.send(err)
		})
})


module.exports = { groupController: router }

// router.get('/groups/types', function (req, res) {
// 	Group.find({groupType})
// 		.then((group) => {
// 			res.send(group)
// 		})
// })
