const express = require('express');
const app = express(); 

const index = require('./routes/index');
const livros = require('./routes/livrosRoute');

app.use((req, res, next) => {
    console.log(`Nova requisição realizada`);
    next()
});

app.use('/', index);
app.use('/livros', livros);

module.exports = app; 