'use strict'
const jwt  = require('jsonwebtoken');
const expressModule = require('express')

const init = (app) =>{

const apiRoutes = expressModule.Router();


apiRoutes.use((req, res, next)=>{

  // check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (! token) {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }

  // verifies secret and checks exp
  return jwt.verify(token, app.get('superSecret'), (err, decoded)=>{
    if (err) {
      return res.json({ success: false, message: 'Failed to authenticate token.' });
    }

    // if everything is good, save to request for use in other routes
    req.decoded = decoded;
    return next();
  });
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);
}

module.exports.init = init
