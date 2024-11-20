// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mssql',
});

const User = sequelize.define('User', {
  UserId: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  // Valider si ajouter UserTypeId dans le modèle --> Assure-toi de fournir UserTypeId dans la requête API pour afficher les informations de l'utilisateur dans les paramètres
  /*UserTypeId: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },*/
  FirstName: { 
    type: DataTypes.STRING(50), 
    allowNull: false 
  },
  LastName: { 
    type: DataTypes.STRING(50), 
    allowNull: false 
  },
  Address: { 
    type: DataTypes.STRING(150), 
    allowNull: false 
  },
  City: { 
    type: DataTypes.STRING(70), 
    allowNull: false 
  },
  State: { 
    type: DataTypes.STRING(30), 
    allowNull: false 
  },
  Zip: { 
    type: DataTypes.STRING(7), 
    allowNull: false 
  },
  Country: { 
    type: DataTypes.STRING(30), 
    allowNull: false 
  },
  Email: { 
    type: DataTypes.STRING(200), 
    allowNull: false, 
    unique: true 
  },
  Password: { 
    type: DataTypes.STRING(255), 
    allowNull: false 
  },
  Status: { 
    type: DataTypes.BOOLEAN, 
    allowNull: false, 
    defaultValue: true // tu peux mettre une valeur par défaut
  }
}, {
  tableName: 'Users', // Assure-toi que le nom de la table est correct
});

module.exports = User;