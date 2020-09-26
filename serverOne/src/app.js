const express = require('express');
const app = express();

const index = require('./route/index.js');
const filmes = require('./route/filmesRoutes.js');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/filmes', filmes);

module.exports = app; 
