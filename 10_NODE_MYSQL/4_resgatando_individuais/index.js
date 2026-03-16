const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middlewares para leitura de dados
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Conexão com o Banco de Dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'nodemysql2',
})

// Rota Principal: Formulário de Cadastro
app.get('/', (req, res) => {
    res.render('home')
})

// Rota POST: Salvar o livro
app.post('/books/insertbook', (req, res) => { 
    const title = req.body.title 
    const pageqty = req.body.pageqty 

    const sql = `INSERT INTO books (title, pageqty) VALUES (?, ?)`
    const data = [title, pageqty]

    conn.query(sql, data, function(err) {
        if (err) {
            console.log("Erro ao inserir:", err)
            return res.send("Erro ao cadastrar livro. Verifique o console.")
        }
        res.redirect('/books')
    })
})

// Rota GET: Listar todos os livros
app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    conn.query(sql, function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        const books = data
        res.render('books', { books })
    })
})

// Rota GET: Ver detalhes de UM livro (Individual)
app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ?`

    conn.query(sql, [id], function(err, data) {
        if (err) {
            console.log(err)
            return
        }
        // data retorna um array, pegamos o índice 0 para virar um objeto único
        const book = data[0] 
        res.render('book', { book })
    })
})

// Iniciar conexão e servidor
conn.connect(function(err) {
    if (err) {
        console.log('Erro ao conectar ao MySQL:', err)
        return
    }
    console.log('Conectou ao MySQL!')
    app.listen(3000)
})
