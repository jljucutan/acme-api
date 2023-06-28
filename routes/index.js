const express = require('express')

const router = express.Router()

/* POST login page. */
router.post('/login', function(req, res, next) {
  console.log(req.body.username)
  res.json({ title: 'Express' })
})

module.exports = router
