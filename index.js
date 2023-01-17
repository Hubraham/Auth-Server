const express = require('express');
const cors = require('cors');
require('dotenv').config();


//crear el servidor/app de express
const app = express();

//directorio Publico
app.use(express.static('public'));

//cors
app.use( cors() );

//LECTURA Y PARSEO
app.use( express.json());

//rutas
app.get('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () =>{
    console.log(`servidor corriendo puerto ${process.env.PORT}`);
}); 