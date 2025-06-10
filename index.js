const express = require('express'); // cria o servidor web
const mustacheExpress = require('mustache-express'); // renderiza as views/o Html
const path = require('path'); // importa o path para manipular os caminhos dos arquivos
const bodyParser = require('body-parser'); // ele faz a ligação dos formularios do html pro js
const session = require('express-session');  // cria a sessão do usuário, ela meio que manterá o usuário logado
const Sequelize = require('sequelize'); // importa o sequelize, que é o ORM que vamos usar para manipular o banco de dados
const { setEngine } = require('crypto');


const app = express();


app.engine('html', mustacheExpress()); // define o motor de renderização das views como mustache
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './src/views')); // define o diretório das views

app.use(express.static(path.join(__dirname, 'src/public')));
app.use(bodyParser.urlencoded({ extended: true })); // permite que o body-parser entenda os dados do formulário
app.use(bodyParser.json()); // permite que o body-parser entenda os dados do json

app.use(express.urlencoded({extended: true}));


const port = 3000;


app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(express.json()); // importa as rotas do arquivo spaceRoutes.js

app.use('/', require('./src/routes/spaceRoutes.js')); // importa as rotas do arquivo spaceRoutes.js

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});