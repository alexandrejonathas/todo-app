const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')

server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

const port = 3000
server.listen(port, function(){
  console.log(`Server rodando em http://127.0.0.1:${port}`)
})


module.exports = server
