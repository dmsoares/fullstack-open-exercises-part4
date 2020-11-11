const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs.js')
const logger = require('./utils/logger.js')
const config = require('./utils/config.js')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => logger.info('connected to mongodb'))
    .catch(error => logger.error('error connecting to mongodb:', error.message))

app.use(cors())
app.use(express.json())

app.use('/', blogsRouter)

module.exports = app
