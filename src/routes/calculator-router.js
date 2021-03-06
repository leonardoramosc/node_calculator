const { Router } = require('express')
const calculatorController = require('../controllers/calculator-controller')

const calculatorRouter = Router()

calculatorRouter.post('/', calculatorController.calculate)
calculatorRouter.get('/history', calculatorController.getHistory)

module.exports = calculatorRouter
