const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// importa o router de usuários
const users = require('./users')

// middleware para tratar dados do formulário
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// caminho base dos templates
const basePath = path.join(__dirname, 'templates')

// usa as rotas de /users
app.use('/users', users)

// rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'))
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
