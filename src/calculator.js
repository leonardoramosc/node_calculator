const { OPERATIONS } = require('./constants/operations.constant')

function extractOperator(operation) {
  const result = operation.match(/[+,\-,*,/]/)

  if (result === null) {
    throw new Error('There is no operator')
  }

  const operator = result[0]

  return {
    symbol: operator,
    operatorIndex: operation.indexOf(operator)
  }
}

function extractFirstOperand(operation) {
  const { operatorIndex } = extractOperator(operation)
  const firstOperand = operation.slice(0, operatorIndex)

  return firstOperand.replace(' ', '')
}

function extractSecondOperand(operation) {
  const { operatorIndex } = extractOperator(operation)

  const secondOperand = operation.slice(operatorIndex + 1)

  return secondOperand.replace(' ', '')
}

function calculate(operation) {
  const isInvalid = operation.match(/[a-zA-Z]/)

  if (isInvalid) {
    throw new Error('Invalid operation, you cannot include letters')
  }

  const { symbol } = extractOperator(operation)
  const firstOperand = parseInt(extractFirstOperand(operation), 10)
  const secondOperand = parseInt(extractSecondOperand(operation), 10)
  let result
  let operationType

  if (symbol === '+') {
    result = firstOperand + secondOperand
    operationType = OPERATIONS.SUM
  }

  if (symbol === '-') {
    result = firstOperand - secondOperand
    operationType = OPERATIONS.SUBTRACTION
  }

  if (symbol === '*') {
    result = firstOperand * secondOperand
    operationType = OPERATIONS.MULTIPLICATION
  }

  if (symbol === '/') {
    result = firstOperand / secondOperand
    operationType = OPERATIONS.DIVISION
  }

  return { result, operationType, firstOperand, secondOperand }
}

module.exports = { extractOperator, extractFirstOperand, extractSecondOperand, calculate }
