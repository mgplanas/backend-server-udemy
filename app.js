// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variable
var app = express();

// Body parser
// x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Importar Rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('MongoDB Connected on 27017 \x1b[32m%s\x1b[0m', 'online.');
});


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server running in port 3000 \x1b[32m%s\x1b[0m', 'online.');
});