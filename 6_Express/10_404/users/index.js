const express = require('express')
const router = express.Router()
const path = require('path')

// basePath definido localmente neste módulo
const basePath = path.join(__dirname, '../templates') // ou '../templates' dependendo da estrutura

// rota para exibir o formulário de usuário
router.get('/add', (req, res) => {
  res.sendFile(path.join(basePath, 'userform.html'))
})

// rota para salvar usuário
router.post('/save', (req, res) => {
  const name = req.body.name
  const age = req.body.age

  console.log(req.body)
  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

  res.sendFile(path.join(basePath, 'userform.html'))
})

// rota para buscar usuário por ID
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log(`Buscando usuário com ID: ${id}`)
  res.send(`Usuário ${id} requisitado.`)
})

module.exports = router
