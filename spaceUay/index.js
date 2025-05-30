const express = require('express'); // cria o servidor web
const mustacheExpress = require('mustache-express'); // renderiza as views/o Html
const path = require('path'); // importa o path para manipular os caminhos dos arquivos
const bodyParser = require('body-parser'); // ele faz a ligação dos formularios do html pro js
const session = require('express-session');  // cria a sessão do usuário, ela meio que manterá o usuário logado
const Sequelize = require('sequelize'); // importa o sequelize, que é o ORM que vamos usar para manipular o banco de dados
const { setEngine } = require('crypto');

app.engine('mustache', mustacheExpress()); // define o motor de renderização das views como mustache
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views')); // define o diretório das views

//const sequelize = new Sequelize('sqlite::memory:');




const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});