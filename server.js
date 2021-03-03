const express = require('express')
const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')
const User = require('./models/User')

mongoose
  .connect('mongodb://localhost/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongodb'))
  .catch(error => console.error('Could not connect to mongodb', error))

const app = express()
app.use(express.json())

let users = []

app.get('/api/users', async (req, res) => {
  //User.find().then(users => res.json(users))
  res.json(await User.find())
})

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.findOne({ id }))
})

app.post('/api/users', async (req, res) => {
  res.json(await User.create(req.body))
})

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params
  users = users.filter(user => user.id !== id)
  res.json(users)
})

app.get('/api/cards', (req, res) => {
  res.json([{ title: 'First Card' }])
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
