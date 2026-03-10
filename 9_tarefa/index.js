const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')

const app = express()

// Configuração do Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

// Pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Lista de produtos
const products = [
  {
    id: 1,
    title: 'Livro',
    price: 13.00
  },
  {
    id: 2,
    title: 'Cadeira',
    price: 199.99
  },
  {
    id: 3,
    title: 'Caneca',
    price: 20.99
  }
]

// Página inicial
app.get('/', (req, res) => {
  res.render('home', { products })
})

// Página de produto individual
app.get('/products/:id', (req, res) => {

  const id = parseInt(req.params.id)

  const product = products.find(p => p.id === id)

  if (!product) {
    return res.send('Produto não encontrado')
  }

  res.render('product', { product })
})

// Servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})