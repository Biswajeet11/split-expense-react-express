const Expense = require('../model/expense')
const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: function (req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

// Init Upload
const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).single('myImage');

// Check File Type
function checkFileType(file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images Only!');
	}
}

router.get('/expenses', function (req, res) {
	Expense.find()
		.populate('paidBy', 'userName')
		.then((expense) => {
			console.log(expense)
			res.send(expense)
		})
})

router.get('/expenses/groups/:id', function (req, res) {
	const id = req.params.id
	Expense.findById({ _id: id })
		.then((expense) => {
			res.send(expense)
		})
})

router.post('/expenses', function (req, res) {
	const body = req.body
	const expenses = new Expense(body)
	expenses.save()
		.then((expense) => {
			res.send({ expense })
		})
		.catch((err) => {
			res.send(err)
		})
})

router.delete('/expenses/:id', function (req, res) {
	const id = req.params.id
	Expense.findByIdAndDelete({ _id: id })
		.then(() => {
			res.send({ notice: 'Record successfully deleted' })
		})
		.catch(err => res.send(err))
})

router.get('/expenses/:id', function (req, res) {
	const id = req.params.id
	console.log(typeof id,'the type is....')
	Expense.findById(id)
		.then((expense) => {
			res.send(expense)
		})
		.catch(err => res.send(err))
})

router.delete('/expenses/groups/:id', function (req, res) {
	const id = req.params.id
	if (id) {
		Expense.findByIdAndDelete(id)
			.then(() => {
				res.send({ notice: 'Record successfully deleted' })
			})
			.catch(err => res.send(err))
	}
	else {
		res.send({ notice: "wrong id.." })
	}

})
module.exports = { expenseRouter: router }