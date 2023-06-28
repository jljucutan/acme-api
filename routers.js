const express = require('express')

var router = express.Router()

var indexRouter = require('./routes')
// var usersRouter = require('./users')

router.use('/', indexRouter)
// app.use('/users', usersRouter)

module.exports = router
