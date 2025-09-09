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

// Rota principal
app.get('/', (req, res) => {


  const user = {
    name: "Breno",
    surname: "james",
    age: "28"
  }
çç

  const palavra = 'Teste'

  res.render('home', { user: user, palavra });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
