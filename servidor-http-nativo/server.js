import http from 'node:http'

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Servidor Funcionando! ${req.method} ${req.url}`);

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: "ok" }));
});

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});