const express = require('express')
const route = express.Router()
const controller = require('../controller/user.controller')
var validate = require('../validate/user.validate')

route.get("",controller.index) 
route.get('/search', controller.search)
route.get('/cookie', (req,res)=>{
    res.cookie('user-id',12345)
    res.send('hello')
})
route.get('/create',controller.create)

route.get('/:id', controller.find)

route.post('/create', validate.postCreate,controller.postCreate)


module.exports = route;