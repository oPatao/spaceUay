const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/database.sqlite'
});

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

function validarSenha(senha) {
  // Aqui você pode implementar a lógica para validar a senha, por exemplo, comparando com uma senha criptografada
  // Por simplicidade, vamos assumir que a senha é válida se for igual à senha armazenada
  return this.senha === senha;
}

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

module.exports = { sequelize, Usuario, validarSenha };
