const express = require('express');
const app = express();
const axios = require('axios')
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config()


let {
  SERVER_PORT,
  CONNECTION_STRING,
} = process.env

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  console.log('connected to db')
  app.set('db', dbInstance);
})

app.post('/api/users', ctrl.create)
app.get('/api/users', ctrl.login)

app.listen(SERVER_PORT, () => console.log('Listening in port ',SERVER_PORT))
