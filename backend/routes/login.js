// Importer le modèle User
const User = require('../models/user');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier si l'utilisateur existe dans la base de données
        const user = await User.findOne({ email });
        console.log('Utilisateur trouvé:', user); // Ajouter ce log pour vérifier l'utilisateur trouvé
        if (!user) {
            return res.status(400).json({ message: 'L\'utilisateur n\'existe pas' });
        }

        // Vérifier si le mot de passe est correct
        if (user.password !== password) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }

        // Authentification réussie
        res.status(200).json({ message: 'Authentification réussie' });
    } catch (error) {
        console.error('Erreur de connexion', error);
        res.status(500).json({ message: 'Erreur de connexion' });
    }
};

module.exports = login;
