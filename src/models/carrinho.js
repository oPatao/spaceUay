const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./usuario');
const { Usuario } = require('./usuario');
const { Anuncio } = require('./anuncios');

class Carrinho extends Model {}

Carrinho.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  anuncioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'anuncios',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Carrinho',
  tableName: 'carrinhos'
});

Carrinho.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
Carrinho.belongsTo(Anuncio, { foreignKey: 'anuncioId', as: 'anuncio' });

module.exports = { Carrinho };