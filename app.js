require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const blogSchema = new mongoose.Schema({
      title: String,
      author: String,
      url: String,
      likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connected to mongodb'))
    .catch(error => console.error(error))

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
      Blog
        .find({})
        .then(blogs => {
                  response.json(blogs)
                })
})

app.post('/api/blogs', (request, response) => {
      const blog = new Blog(request.body)

      blog
        .save()
        .then(result => {
                  response.status(201).json(result)
                })
})