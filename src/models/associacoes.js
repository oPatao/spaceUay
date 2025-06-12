const { Usuario } = require('./usuario');
const { Anuncio } = require('./anuncios');

// Defina as associações aqui
Usuario.hasMany(Anuncio, {
  foreignKey: 'usuarioId',
  as: 'anuncios'
});

Anuncio.belongsTo(Usuario, {
  foreignKey: 'usuarioId',
  as: 'usuario'
});