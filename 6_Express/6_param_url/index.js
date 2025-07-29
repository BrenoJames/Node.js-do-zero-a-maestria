const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
const id = req.params.id

//leitura da tabela users, resgatar um usuário do banco
console.log(`estamos buscando pelo usuario: ${id}`)

  res.sendFile(path.join(basePath, 'index.html'))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'))
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
