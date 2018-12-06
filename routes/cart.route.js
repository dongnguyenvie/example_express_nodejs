const express = require('express')
const route = express();
const controller = require('../controller/cart.Controller')

route.get('/cart/add/:productId',controller.addToCart)

module.exports = route;