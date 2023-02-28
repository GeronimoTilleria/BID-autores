require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PUERTO;

// Configuraciones
require('./config/mongoose.config');

app.use(cors());
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

// Rutas
require('./routes/author.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));