const express = require('express');
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('./db/config');
require('dotenv').config();


//crear el servidor/app de express
const app = express();

//CONEXION BASE DATOS
dbConnection();

//directorio Publico
app.use(express.static('public'));

//cors
app.use( cors() );

//LECTURA Y PARSEO
app.use( express.json());

//rutas
app.use('/api/auth', require('./routes/auth'));

//manejar demas rutas
app.get( '*', (req, res)=>{
    res.sendFile( path.resolve(__dirname,'public/index.html'));
});

app.listen(process.env.PORT, () =>{
    console.log(`servidor corriendo puerto ${process.env.PORT}`);
}); 