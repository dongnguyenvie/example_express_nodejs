const express = require('express')
const route = express.Router()
const controller = require('../controller/auth.controller')

route.get("/login", controller.login)
route.post('/login', controller.postLogin)

module.exports = route;