const express = require('express')
const route = express.Router()
const controller = require('../controller/product.controller')

route.get('',controller.index)


module.exports = route;