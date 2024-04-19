const pathEnv = process.env.NODE_ENV == "production" ? '/.env.production' : '/.env.development';
require("dotenv").config({path: __dirname + pathEnv });
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        // await mongoose.connect(process.env.DB_CNN);
        await mongoose.connect('mongodb://abexa@192.168.1.17:30004/devmpos?authMechanism=DEFAULT&authSource=admin');
        console.log('init DB '+process.env.DB_CNN);
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la BD: ' + process.env.DB_CNN);
    }
}
module.exports = { dbConnection }
