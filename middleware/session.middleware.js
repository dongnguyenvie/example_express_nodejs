var shortid = require('shortid')
var db = require('../db')
module.exports = function(req,res,next){
    console.log(req.signedCookies.sessionId)
    var sessionId = shortid.generate();
    if(!req.signedCookies.sessionId){
        res.cookie('sessionId', sessionId,{
            signed: true
        })
        db.get('sessions').push({
            id: sessionId
        }).write()
    }

    next()
}
