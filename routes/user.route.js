const express = require('express')
const route = express.Router()
const controller = require('../controller/user.controller')


route.get("",controller.index) 
route.get('/search', controller.search)

route.get('/create',controller.create)

route.get('/:id', controller.find)

route.post('/create', controller.postCreate)

module.exports = route;