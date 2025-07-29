const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

// ----Middleware de autenticação
const checkAuth = function(req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    next()
  } else {
    console.log('Não está logado, faça o login para continuar')
    next()
  }
}

// ----Aplica o middleware a todas as rotas
app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'))
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
