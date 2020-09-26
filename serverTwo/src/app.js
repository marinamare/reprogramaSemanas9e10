const express = require('express');
const app = express();

//importando arquivos de rota

const index = require('./route/index');
const signos = require('./route/signosRoute');


app.use((req, res, next) => {
    console.log(`Nova requisição realizada`);
    next()
});

app.use('/', index);
app.use('/signos', signos);

module.exports = app;