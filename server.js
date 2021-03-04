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

//ROUTES FOR USER

app.get('/api/users', async (req, res, next) => {
  //User.find().then(users => res.json(users))
  res.json(await User.find().catch(next))
})

app.get('/api/users/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findOne({ id }).catch(next))
})

app.post('/api/users', async (req, res, next) => {
  res.json(await User.create(req.body).catch(next))
})

app.delete('/api/users/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.deleteOne({ id }).catch(next))
})

//ROUTES FOR CARDS

app.get('/api/cards', async (req, res, next) => {
  res.json(await Card.find().populate('author').catch(next))
})

app.get('/api/cards/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Card.findOne({ id }).populate('author').catch(next))
})

app.post('/api/cards', async (req, res, next) => {
  res.json(await Card.create(req.body).catch(next))
})

app.put('/api/cards/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Card.updateOne({ id }).catch(next))
})

app.delete('/api/cards/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Card.deleteOne({ id }).catch(next))
})

app.use((err, req, res, next) => {
  console.error(err.message)
  res.json({ error: err })
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
