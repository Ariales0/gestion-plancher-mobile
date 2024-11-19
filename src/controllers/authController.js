// controllers/authController.js
exports.register = async (req, res) => {
  const { FirstName, LastName, Address, City, State, Zip, Country, Email, Password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = await User.create({
      FirstName, LastName, Address, City, State, Zip, Country, Email, Password: hashedPassword, 
      //UserTypeId,  // Ajouter dans API pour permettre afficher infos users dans réglages ? Assure-toi de fournir UserTypeId dans la requête
      Status: false // Le Status par défaut à false, l'administrateur doit activer le compte
    });
    
    res.status(201).json({ message: 'Utilisateur enregistré avec succès!', user: newUser });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user', details: error });
  }
};
