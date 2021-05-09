const express = require('express')
const app = express()
const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')
const CreatePost = require('./services/createPost')
const GetPosts = require('./services/getPosts')
const DeletePost = require('./services/deletePost')
const EditPost = require('./services/editPost')

app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)

app.delete('/delete', DeletePost)
app.get('/posts', GetPosts)
app.post('/create', CreatePost)
app.patch('/edit', EditPost)

module.exports = app