//improtacion de bloques
require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());

//conexion con la db
mongoose.connect(MONGODB_URL)
    .then(()=> {
        console.log('Conexion exitosa a MondoDB Atlas');
    })
    .catch(err => {
        console.log('Error de conexion', err.message);
    })

//rutas

app.listen(PORT, () => {
    console.log(`Servidor corriendo en htpp://localhost:${PORT}`)
})