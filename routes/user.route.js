const express = require('express')
const route = express.Router()
const controller = require('../controller/user.controller')
const validate = require('../validate/user.validate')
const multer = require('multer')

const upload = multer({ dest: './public/uploads/' })

route.get("", controller.index)
route.get('/search', controller.search)
route.get('/cookie', (req, res) => {
    res.cookie('user-id', 12345)
    res.send('hello')
})
route.get('/create', controller.create)

route.get('/:id', controller.find)

route.post('/create',
    upload.single('avatar'),
    validate.postCreate,
    controller.postCreate)


module.exports = route;