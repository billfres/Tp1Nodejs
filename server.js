//Dans la dernière ligne, vous configurez le serveur pour qu'il écoute 
const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);



server.listen(process.env.PORT || 3000);

//utilisez une fenêtre de navigateur pour accéder à http://localhost:3000 
//utilisez une fenêtre de navigateur pour accéder à http://localhost:4000 