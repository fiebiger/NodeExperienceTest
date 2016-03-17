'use strict'

const jwt  = require('jsonwebtoken');

const init = (app,db) => {
  app.post('/api/users',(req,res) => {
    db.func('fetch_user',[req.body.email,req.body.password]).then( (user) => {
      if (user.length === 0) {
           res.json({ success: false, message: 'Authentication failed. User not found.' });
         } else {
           // create a token
         const token = jwt.sign(user, app.get('superSecret'), {
           expiresInMinutes: 1440 // expires in 24 hours
         });
         // return the information including token as JSON
         res.json({
           success: true,
           message: 'Enjoy your token!',
           token: token
         });
         }
    }).catch((error)=>{
      res.error(error)
    })
  })
}
module.exports.init = init
