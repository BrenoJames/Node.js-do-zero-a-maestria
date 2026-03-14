const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()


app.engine('handlebars', exphbs.engine()) // Use .engine() diretamente
app.set('view engine', 'handlebars')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'nodemysql2',
})

app.get('/', (req, res) => {
    res.render('home')
})


app.post('/books/insertbook', (req, res) => { 
    const title = req.body.tittle   
    const pageqty = req.body.pageqty 

    const sql = `INSERT INTO books (tittle, pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, function(err) {
        if (err) {
            console.log(err)
            return res.status(500).send("Erro ao inserir")
        }
        res.redirect('/')
    })
})


conn.connect(function(err) {
    if (err) {
        console.log('Erro ao conectar ao banco:', err)
        return
    }
    console.log('Conectou ao MySQL!')
    app.listen(3000)
})
