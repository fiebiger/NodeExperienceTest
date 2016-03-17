'use strict'

const jwt  = require('jsonwebtoken');

const init = (express,db) => {

  express.post('/users',(req,res) => {
    db.func('fetch_user',[req.body.email,req.body.password]).then( (user) => {
      if (!user) {
           res.json({ success: false, message: 'Authentication failed. User not found.' });
         } else {
           // create a token
         const token = jwt.sign(user, express.get('superSecret'), {
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
