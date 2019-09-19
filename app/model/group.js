const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const groupSchema = new Schema({
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


const Group = mongoose.model('Group', groupSchema)
module.exports = Group