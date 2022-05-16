const express = require('express')
const calculatorRouter = require('./routes/calculator-router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', calculatorRouter)

module.exports = app
