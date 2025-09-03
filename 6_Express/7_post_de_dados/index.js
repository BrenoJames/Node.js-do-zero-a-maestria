const express = require('express')
const app = express()
const port = 3000

const path = require('path')

// middleware para tratar dados do formulário
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

const basePath = path.join(__dirname, 'templates')

// rota para exibir o formulário
app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

// rota para salvar usuário
app.post('/users/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

  res.sendFile(`${basePath}/userform.html`)
})

// rota para buscar usuário por ID
app.get('/users/:id', (req, res) => {
  const id = req.params.id

  console.log(`Estamos buscando pelo usuário: ${id}`)
  res.sendFile(path.join(basePath, 'index.html'))
})

// rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'))
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
