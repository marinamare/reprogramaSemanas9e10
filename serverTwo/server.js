const app = require('./src/app.js');
const port = 7070; 

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`);
});
