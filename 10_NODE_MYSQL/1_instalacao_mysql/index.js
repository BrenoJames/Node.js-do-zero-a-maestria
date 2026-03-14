const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

// Configuração corrigida do Handlebars (o .engine precisa do exphbs.engine() nas versões novas)
const hbs = exphbs.create({})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars') // 'handlebars' em minúsculo é o padrão

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Verifique se sua senha do MySQL está vazia mesmo
    database: 'nodemysql2',
})

conn.connect(function(err) {
    if (err) {
        console.log('Erro ao conectar ao banco:', err)
        return // Para a execução se der erro no banco
    }

    console.log('Conectou ao MySQL!')
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000!')
    })
})
