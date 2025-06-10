// filepath: src/models/anuncios.js
const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('./usuario'); // Import the sequelize instance from usuario.js

class Anuncio extends Model {}

Anuncio.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  planeta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  usuarioId: { // Foreign key to link to the Usuario model
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios', // This should match the Usuario model's tableName
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Anuncio',
  tableName: 'anuncios' // Define the table name
});

module.exports = { Anuncio };