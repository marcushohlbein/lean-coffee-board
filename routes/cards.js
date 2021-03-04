const express = require('express')
const Card = require('../models/Card')

const router = express.Router(),


router.get('/api/cards', async (req, res, next) => {
  res.json(await Card.find().populate('author').catch(next))
})

router.get('/api/cards/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Card.findById(id).populate('author').catch(next))
})

router.post('/api/cards', async (req, res, next) => {
  res.json(await Card.create(req.body).catch(next))
})

router.patch('/api/cards/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Card.findByIdAndUpdate(id).catch(next))
})

router.delete('/api/cards/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(
    await Card.findByIdAndDelete(id, req.body, { new: true }).catch(next)
  )
})

module.exports = router