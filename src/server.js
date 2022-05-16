const mongoose = require('mongoose')
const dotenv = require('dotenv')

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION. Shutting down...')
  console.log(err)
  process.exit(1)
})

dotenv.config({ path: './config.env' })

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/calculator'

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB connection successful'))
  .catch((reason) => {
    console.log(`Unable to connect to database. Reason: ${reason}`)
  })

const app = require('./app')

const port = process.env.PORT || 8000

const server = app.listen(port, () => {
  console.log(`app running on port ${port}`)
})

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION. Shutting down...')
  console.log(err)
  server.close(() => {
    process.exit(1)
  })
})

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully')
  server.close(() => {
    console.log('Process terminaed.')
  })
})
