//Importa a instância do Express configurada em index.js
const app = require("./index");
const cors = require('cors');

// Configuração do CORS com origens permitidas
const corsOptions = {
    origin: '*', //Substitua pela origem permitida, todos podem acessar *
    methods: 'GET,HEAD,PUT,PATCH,POST', //Métodos HTTP permitidos
    credentials: true, //permite o uso de cookies e credencials
    optionsSuccessStatus: 204, //Define o status de resposta para o metodo OPTIONS
}

//Aplicando o middlewares CORS no app
app.use(cors(corsOptions))
//Inicia o servidor na porta 5000, tornando a API acessível em http://localhost:5000
app.listen(5000);