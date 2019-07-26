const http = require('http');
const port = 3000;

const handle = (req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain',
    });
    res.end('Hola, mundo. Soy un servidor real');
}

const server = http.createServer(handle);

server.listen(port, err => {
    if (err) {
        return console.log('La cagaste:', err);
    }
    console.log(`El servidor está a la escucha en el puerto ${port}`);
});