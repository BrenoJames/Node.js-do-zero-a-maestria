const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configuração do Handlebars
const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Rota do dashboard
app.get('/dashboard', (req, res) => {
  const items = ["Item a", "item b", "item c"];

  res.render('dashboard', { items }); 
});

app.get('/post', (req, res) => {
  const post = {
    tiitle: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js...',
    comments: 4,
  }

res.render('blogpost', { post });
})

// Rota principal
app.get('/', (req, res) => {
  const user = {
    name: "Breno",
    surname: "James",
    age: 28, // 👈 idade como número, opcional mas recomendado
  };

  const palavra = 'Teste';
  const auth = false;
  const approved = true;

  res.render('home', {
    user,
    palavra,
    auth,
    approved,
    title: 'Página Inicial' // 👈 adicionado: você está usando "title" no layout?
  });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
