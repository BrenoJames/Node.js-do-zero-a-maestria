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
  res.render('dashboard');
});

// Rota principal
app.get('/', (req, res) => {
  const user = {
    name: "Breno",
    surname: "James",
    age: "28",
  };

  const palavra = 'Teste';
  const auth = true;

  res.render('home', { user, palavra, auth, title: 'Página Inicial' });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
