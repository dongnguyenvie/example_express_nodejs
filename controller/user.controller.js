const md5 = require('md5')
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
        users: db.get('users').value()
    })
}

module.exports.search = (req, res) => {
    var q = req.query.q;
    var lstUser = db.get('users').value();
    // console.log(lstUser)
    var matchedUsers = lstUser.filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
  //  console.log(matchedUsers)
    res.render('../views/index', {
        users: matchedUsers,
        key: q
    })
}

module.exports.find = (req, res) => {
    let id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        users : user
    })
}

module.exports.create = (req, res) => {
    res.render('users/create')
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate()
    req.body.password = md5(req.body.password);
    req.body.avatar = req.file.path.split('\\').slice(1).join('/')
    db.get('users').push(req.body).write();
    res.redirect('/users')  //chuyen huong nguoi dung
}