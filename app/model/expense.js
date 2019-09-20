const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
	description: {
		type: String,
		required: true,
		minlength: 4,
		validate: function (description) {
			return description.length >= 4
		},
		msg: function () {
			return 'Enter proper description'
		}
	},
	amount: {
		type: Number,
		required: true,
		min: 0.1,
		validate: function (amount) {
			return amount >= 0.1
		},
		msg: function () {
			return 'Enter some amount '
		}
	},
	paidBy: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now
	},
	split:
	{
		type: String,
		required: true,
		enum: ['equally', 'unequally', 'percentage'],
		default: 'equally'
	},
	notes:
	{
		type: String,
	},
})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense