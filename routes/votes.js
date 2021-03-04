const express = require('express')
const Card = require('../models/Card')

const router = express.Router()

router.patch('/:id/votes', async (req, res, next) => {
  const { id } = req.params
  res.json(
    await Card.findByIdAndUpdate(
      id,
      { $inc: { votes: 1 } },
      { new: true }
    ).catch(next)
  )
})

module.exports = router
