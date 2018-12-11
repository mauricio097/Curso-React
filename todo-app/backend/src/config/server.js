const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json()) // Usa para converter os parâmetros reccebidos para JSON
server.use(allowCors) // Habilita o midleware Cors criado

server.listen(port, function() {
    console.log(`Rodando na Porta ${port}`);
})

module.exports = server