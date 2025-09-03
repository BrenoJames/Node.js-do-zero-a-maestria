const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.set('views', __dirname + '/views');

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.handlebars'
});

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', { title: 'Handlebars' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
