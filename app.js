const express = require('express');
//importation du package body-parser
const bodyParser = require('body-parser');
//importation du package mongoose
const mongoose = require('mongoose');

//importation du chemin pour resoudre le problème de l'image
const path = require('path');

//importation des routeurs
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');


const app = express();



//configuration de la BD
mongoose.connect('mongodb+srv://fresneltest1:fresneltest1@cluster0.xxdoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/*
Ces headers permettent :
    d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
    d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
    d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//définissons sa fonction json comme middleware global pour votre application, juste après avoir défini les headers de la réponse :
//app.use(body-parser.json());
app.use(express.json());

//correction du lien de stockage d'images
app.use('/images', express.static(path.join(__dirname, 'images')));
//completion de la route avec staffRoutes
app.use('/api/stuff', stuffRoutes);
//completion de la route avec authRoutes
app.use('/api/auth', userRoutes);

module.exports = app;