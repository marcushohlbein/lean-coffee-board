const express = require('express')

const app = express()

const users = []

app.use(express.json())

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.post('/api/users', (req, res) => {
  users.push(req.body)
  res.json(req.body)
})

app.get('/api/cards', (req, res) => {
  res.json([{ title: 'First Card' }])
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
