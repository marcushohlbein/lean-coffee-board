const express = require('express')

const app = express()

app.use('/api/users', (req, res) => {
  res.send('[{"name": "Marcus", "role": "student"}]')
})

app.use('/api/cards', (req, res) => {
  res.send('[{"title": "First Card"}]')
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
