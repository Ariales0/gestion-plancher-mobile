// controllers/loginController.js
const User = require('../models/User'); // Assurez-vous que le modèle User est importé
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET; // Assurez-vous que vous avez configuré votre secret

// Fonction pour connecter un utilisateur
exports.login = async (req, res) => {
  const { Email, Password } = req.body;
  
  try {
    const user = await User.findOne({ where: { Email } });
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });

    if (!user.Status) return res.status(403).json({ error: 'Compte inactif' });

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Mot de passe invalide' });

    const token = jwt.sign({ id: user.UserId, Email: user.Email }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ message: 'Connexion réussie', token });
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la connexion', details: error });
  }
};
