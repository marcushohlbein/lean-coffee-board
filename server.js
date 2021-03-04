const express = require('express')
const SetupMongo = require('./setupMongo')

SetupMongo()
const app = express()

app.use(express.json())
app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use('/api/cards', require('./routes/votes'))

app.use(require('./routes/error'))

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
