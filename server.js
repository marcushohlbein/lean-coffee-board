const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()

let users = []

app.use(express.json())

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.post('/api/users', (req, res) => {
  users.push({ ...req.body, id: uuidv4() })
  res.json(req.body)
})

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  res.json(users.find(user => user.id === id))
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
