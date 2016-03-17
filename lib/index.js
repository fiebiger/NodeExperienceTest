'use strict'

const http = require('http')
const express = require('express')()
const server = http.createServer(express)
const pgp = require('pg-promise')()
const bodyParser = require('body-parser')
const db = pgp('postgres://ffkgnauoocylbf:boAMIKr7wYc1o7HRlRix_2JS5k@ec2-54-228-180-92.eu-west-1.compute.amazonaws.com:5432/dc9t0e8huv7t7v?ssl=true')

const addressBook = require('./addressBook')
const auth = require('./authentication')
const config = require('./config')

express.use(bodyParser.urlencoded({ extended: false }))
express.use(bodyParser.json())
express.set('superSecret', config.secret)

addressBook.init(express,db)
auth.init(express,db)


server.listen(process.env.PORT || 3000)


express.get('/',(req,res) => res.json({name: 'Hi'}))
