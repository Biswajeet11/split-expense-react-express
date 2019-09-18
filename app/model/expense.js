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
		default: Date.now()
	},
	split:
	{
		type: String,
		required: true,
		enum: ['equally', 'unequally', 'percentage'],
		default: 'equally'
	},
	notes: [
		{
			type: String,
		}
	],
	group: {
		groupName: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 20,
			validate: {
				validator: function (groupName) {
					return groupName.length >= 3 && groupName.length <= 20
				},
				msg: function () {
					return 'groupname less than 3 characters'
				}
			}
		},
		groupType:
		{
			type: String,
			required: true,
			enum: ['Home', 'Office', 'Friends'],
			default: 'Friends'
		},
		groupMembers: [{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
			amountSpent: {
				type: Number,
				default: 0
			},
			reimbursement: {
				type: Number,
				default: 0
			},
			screenShotsReciept: 
				{
					type: String,
				}
		}]
	}
})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense