const express = require('express');
const { dbConnection } = require('../database/config');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.eventosPath = '/api/eventos';
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        this.middlewares();
        this.routes();
        this.connectDb();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Eschando por el puerto ${this.port}`);
        });
    }
    middlewares() {

        this.app.use(cors());

        this.app.use(bodyParser.json());
        this.app.use(express.static(__dirname + "/public"));
    }
    routes() {

        this.app.use(this.eventosPath, require('../routes/eventos'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        this.app.use(this.authPath, require('../routes/auth'));
    }
    async connectDb() {
        await dbConnection();
    }
}
module.exports = Server; 