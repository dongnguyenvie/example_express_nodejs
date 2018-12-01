
const db = require('../db')
const shortid = require('shortid')
/*
    *   GET
    *   POST
    *   DELETE
    *   PUT
*/
module.exports.index = (req, res) => {
    res.render("users/index", {
        user: db.get('users').value()
    })
}

module.exports.search = (req, res) => {
    var q = req.query.q;
    var lstUser = db.get('users').value();
    // console.log(lstUser)
    var matchedUsers = lstUser.filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    console.log(matchedUsers)
    res.render('../views/index', {
        user: matchedUsers,
        key: q
    })
}

module.exports.find = (req, res) => {
    let id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    console.log(user);
    res.render('users/view', {
        user: user
    })
}

module.exports.create = (req, res) => {
    console.log(req.cookies)
    res.render('users/create')
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate()
    console.log(res.locals)
    db.get('users').push(req.body).write();
    res.redirect('/users')  //chuyen huong nguoi dung
}