const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const groupSchema = new Schema({
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
				return 'group name less than 3 characters'
			}
		}
	},
	groupType:
	{
		type: String,
		required: true,
	},

	selectedMembers: [{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		// amountSpent: {
		//   type: Number,
		//   default: 0
		// },
		// reimbursement: {
		//   type: Number,
		//   default: 0
		// },
		// screenShotsReciept:
		//   {
		//     type: String,
		//   }
	}]

})


const Group = mongoose.model('Group', groupSchema)
module.exports = Group