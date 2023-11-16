const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

const reservas = require('./api/reserva')

const app = express()
const cors = require('cors');
const port = 3080
app.use(cors({
  origin: '*'
}));

/* Esta e sla parte del Middleware */
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());


app.use('/api/reservas',reservas)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

