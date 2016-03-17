'use strict'

const http = require('http')
const express = require('express')()
const server = http.createServer(express)
const pgp = require('pg-promise')()
const addressBook = require('./addressBook')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
express.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
express.use(bodyParser.json())

const db = pgp('postgres://ffkgnauoocylbf:boAMIKr7wYc1o7HRlRix_2JS5k@ec2-54-228-180-92.eu-west-1.compute.amazonaws.com:5432/dc9t0e8huv7t7v?ssl=true')



addressBook.init(express,db)


server.listen(3000)


express.get('/',(req,res) => res.json({name: 'Hi'}))
