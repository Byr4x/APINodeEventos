const express = require('express');
const { dbConnection } = require('../database/config');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 10000;

        this.eventosPath = '/api/eventos';
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
    }
    async connectDb() {
        await dbConnection();
    }
}
module.exports = Server; 