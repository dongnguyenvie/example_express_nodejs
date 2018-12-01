const db = require('../db')

module.exports.login = (req, res) => {

    res.render('auth/login')
}
module.exports.postLogin = (req, res) => {
    var email = req.body.email;
    var pass = req.body.pass;
    var user = db.get('users').find({ email: email }).value();
    if (!user) {
        res.render('auth/login', {
            errors: [
                'email not exits'
            ],
            values: req.body
        })
        return;
    }
    if (user.password !== pass) {
        res.render('auth/login', {
            errors: [
                'pass not exits'
            ],
            values: req.body
        })
        return;
    }
    
    res.cookie('userId', user.id)
    res.redirect('/users')
}