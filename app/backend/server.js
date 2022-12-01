const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3305;

app.listen(port, () => console.log('Rodando em ', port));