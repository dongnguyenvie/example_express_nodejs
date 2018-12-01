const express = require('express');
const port = 3000
const bodyParse = require('body-parser')

const app = express()

const useRoute = require('./routes/user.route')

//set view
app.set('view engine', 'pug')
app.set('views', './views')

//parse body
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

//express static
app.use('/styles',express.static('public'))

//route
app.use('/users', useRoute)




app.listen(port, () => {
    console.log(`Server listening onport ${port}`);
})
