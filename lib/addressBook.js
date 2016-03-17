'use strict'

const init = (app,db) => {

  app.get('/api/address/:email',(req,res) => {
    db.func('fetch_contacts',[req.params.email]).then( (respnse) => {
      res.json(respnse)
    }).catch((error)=>{
      res.error(error)
    })
  })

  app.post('/api/address',(req,res) => {
    db.func('create_contact',[req.body.name,req.body.phone,req.body.email]).then( (respnse) => {
      res.json(respnse)
    }).catch((error)=>{
      res.error(error)
    })
  })

  app.put('/api/address',(req,res) => {
    db.func('update_contact',[req.body.name,req.body.phone,req.body.email]).then( (respnse) => {
      res.json(respnse)
    }).catch((error)=>{
      res.error(error)
    })
  })

  app.delete('/api/address/:email',(req,res) => {
    db.func('delete_contact',[req.params.email]).then( () => {
      res.send('operation successful')
    }).catch((error)=>{
      res.error(error)
    })
  })

}

module.exports.init = init
