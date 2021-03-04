module.exports = (err, req, res, next) => {
  console.error(err.message)
  res.json({ error: err.message })
}
