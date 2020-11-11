require('dotenv').config()
const http = require('http')
const mongoose = require('mongoose')
const app = require('./app')

const server = http.createServer(app)

const PORT = process.env.PORT
server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
})
