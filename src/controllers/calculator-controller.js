const mongoose = require('mongoose')
const calculator = require('../calculator')
const History = require('../models/history.model')

async function calculate(req, res) {
  const operation = req.body.calculate

  try {
    const { result, operationType, firstOperand, secondOperand } = calculator.calculate(operation)

    res.json({
      result
    })

    await History.create({ operation: operationType, result, firstOperand, secondOperand })
  } catch (error) {
    if (error instanceof mongoose.Error) {
      console.log(error.errors)
      return
    }
    res.json({
      error: error.message
    })
  }
}

module.exports = {
  calculate
}
