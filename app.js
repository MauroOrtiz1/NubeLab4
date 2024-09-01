const express = require('express');
const app = express();
const port = 9000;

// Rutas para clientes y productos
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
