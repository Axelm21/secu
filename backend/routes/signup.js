// Importer le modèle User
const User = require('../models/user');

const signup = async (req, res) => {
    try {
        const { username, firstName, lastName, email, password } = req.body;
        // Vérifiez si l'utilisateur existe déjà dans la base de données
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'L\'utilisateur existe déjà' });
        }
        
        // Créez un nouvel utilisateur avec les données fournies
        const newUser = new User({ username, firstName, lastName, email, password }); // Ajoutez username ici
        await newUser.save();
        
        res.status(201).json({ message: 'Inscription réussie' });
    } catch (error) {
        console.error('Erreur lors de l\'inscription', error);
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
    }
};

module.exports = signup;
