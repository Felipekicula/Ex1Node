const http = require('http');
const num = require('./numero');

const requestListener = function (req, res) {
    if(req.url === "/") {
        res.writeHead(200);
        res.end("Bem vindo!")
    }

    else if (req.url === "/sobre") {
        res.writeHead(200);
        res.end("Meu nome é Felipe kiçula")
    }

    else if (req.url === "/contato") {
        res.writeHead(200)
        res.end("Meu instagram é gorgokicula")
    }

    else if (req.url === "/numero") {
        res.writeHead(200)
        res.end(num(1,10).toString())
    }
    
    else if (req.url.startsWith("/saudacao/")) {
        const nome = req.url.replace("/saudacao/", "");
        res.writeHead(200);
        res.end(`Olá, ${nome}!`);
    }

    else {
        res.writeHead(404);
        res.end("Página não encontrada")
    }
};

const server = http.createServer(requestListener);
server.listen(8000, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8000"); 
});


