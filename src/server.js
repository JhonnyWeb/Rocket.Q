const express = require('express')
const route = require('./route')
const path = require('path')
const port = 3000

// atribui o express na variavel server
const server = express()

// seta a view para ejs
server.set('view engine', 'ejs')

// utiliza a pasta public
server.use(express.static("public"))

// seta e direciona o caminho do ejs para a pasta views
server.set('views', path.join(__dirname, 'views'))

// utiliza as rotas
server.use(route)

// escuta o servidor na porta 3000
server.listen(port, () => console.log("RODANDO"))