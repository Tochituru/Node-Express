const express = require('express');
const app = express();
const port = 3500;

app.listen(port, () => console.log(`App de ejemplo que escucha desde el puerto ${port}`));

app.get('/productos', (req, res) => res.send('Mostramos una lista de productos con la respuesta a un pedido HTTP GET'));

app.post('/productos', (req, res) => res.send('Creamos un producto con la respuesta a un pedido por HTTP POST'));

app.put('/productos/:id', (req, res) =>res.send('Actualizamos un producto con la respuesta a un pedido por HTTP PUT'));

app.delete('/productos/:id', (req, res) => res.send('Borramos un producto con la respuesta a un pedido por HTTP DELETE'));

app.get('/objeto-de-json', (req, res) => res.json({nombre: 'rocío', edad: 32 }));

const path = require('path');

app.get('/enviar-archivo', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));