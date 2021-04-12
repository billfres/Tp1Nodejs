//Dans la dernière ligne, vous configurez le serveur pour qu'il écoute 
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);

//utilisez une fenêtre de navigateur pour accéder à http://localhost:3000 
//utilisez une fenêtre de navigateur pour accéder à http://localhost:4000 