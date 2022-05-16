const mongoose = require('mongoose')
const { OPERATIONS } = require('../constants/operations.constant')

// name, email, photo, password, passwordConfirm.
const historySchema = new mongoose.Schema({
  operation: {
    type: String,
    enum: [OPERATIONS.SUM, OPERATIONS.SUBTRACTION, OPERATIONS.MULTIPLICATION, OPERATIONS.DIVISION],
    required: [true, 'Operation is a required field.']
  },
  firstOperand: {
    type: Number,
    required: [true, '{VALUE} is a required field']
  },
  secondOperand: {
    type: Number,
    required: [true, '{VALUE} is a required field']
  },
  result: {
    type: Number,
    required: [true, 'result is a required field']
  }
})

// eslint-disable-next-line new-cap
const History = new mongoose.model('History', historySchema)

module.exports = History
