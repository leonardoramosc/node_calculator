const { Router } = require('express')
const calculatorController = require('../controllers/calculator-controller')

const calculatorRouter = Router()

calculatorRouter.get('/', calculatorController.calculate)

module.exports = calculatorRouter
