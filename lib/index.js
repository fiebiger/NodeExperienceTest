'use strict'

const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const pgp = require('pg-promise')()
const bodyParser = require('body-parser')
const db = pgp('postgres://ffkgnauoocylbf:boAMIKr7wYc1o7HRlRix' +
'_2JS5k@ec2-54-228-180-92.eu-west-1.compute.amazonaws.com:5432/dc9t0e8huv7t7v?ssl=true')

// Public
const auth = require('./authentication')

//Non public
const routing = require('./routing')
const addressBook = require('./addressBook')
const config = require('../config/config')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('superSecret', config.secret)

auth.init(app,db)
routing.init(app)
addressBook.init(app,db)


server.listen(config.port || 3000)

app.get('/',(req,res) =>
  res.json({name: 'Hi'})
    .catch((error)=>{
      res.error(error)
}))
