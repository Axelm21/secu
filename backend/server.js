const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Configuration CORS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importer les routes
const authRoutes = require('./routes/authRoutes');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');

// Utiliser les routes
app.use('/auth', authRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);

// mongoose.connect('mongodb://localhost:27017/db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// Connecter à la base de données MongoDB...
mongoose.connect('mongodb+srv://coach:coach21@cluster0.0tjtyip.mongodb.net/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connexion à MongoDB réussie');
    // Démarrer le serveur une fois connecté à la base de données
    app.listen(port, () => {
      console.log(`Serveur en cours d'exécution sur le port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });
