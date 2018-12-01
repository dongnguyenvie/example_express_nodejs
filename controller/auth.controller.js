const db = require('../db')

module.exports.login = (req, res) => {

    res.render('auth/login')
}
module.exports.postLogin = (req, res) => {
    var email = req.body.email;
    var pass = req.body.pass;
    db.get('users').find({ email: email }).value();
    if (!user) {
        res.render('auth/login', {
            error: [
                'User not exits'
            ]
        })
        return;
    }
    if (user.password !== pass) {
        res.render('auth/login', {
            error: [
                'User not exits'
            ]
        })
        return;
    }
    res.redirect('/users')
}