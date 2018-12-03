require('dotenv').config();
console.log(process.env.SESSION_SECRET)
const express = require('express');
const port = 3000 || process.env.port
const bodyParse = require('body-parser')
var cookieParser = require('cookie-parser')
var authMiddleware = require('./middleware/auth.middleware')
const app = express()

const useRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')

//set view
app.set('view engine', 'pug')
app.set('views', './views')

//parse body
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
//parser cookie
app.use(cookieParser(process.env.SESSION_SECRET))

//express static
app.use('/styles', express.static('public'))

//route
app.use('/users',authMiddleware.requireAuth, useRoute)
app.use('/auth', authRoute)



app.listen(port, () => {
    console.log(`Server listening onport ${port}`);
})
