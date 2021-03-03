const express = require('express')
const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')
const User = require('./models/User')
const Card = require('./models/Card')

mongoose
  .connect('mongodb://localhost/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongodb'))
  .catch(error => console.error('Could not connect to mongodb', error))

const app = express()

app.use(express.json())

//ROUTES FOR  USER

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

app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.deleteOne({ id }))
})

//ROUTES FOR  CARDS

app.get('/api/cards', async (req, res) => {
  res.json(await Card.find())
})

app.get('/api/cards/:id', async (req, res) => {
  const { id } = req.params
  res.json(await Card.findOne({ id }))
})

app.post('/api/cards/:id', async (req, res) => {
  res.json(await Card.create(req.body))
})

/* app.put('/api/cards/:id', async (req, res) => {
  const {id} = req.params
  res.json(await)
}) */

app.delete('/api/cards/:id', async (req, res) => {
  const { id } = req.params
  res.json(await Card.deleteOne({ id }))
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
