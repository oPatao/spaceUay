const {Usuario, validarSenha} = require('../models/usuario');


exports.registro = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } });

    if (usuarioExistente) {
      return res.status(400).json({ message: 'E-mail já cadastrado' });
    }

    const novoUsuario = await Usuario.create({ nome, email, senha });
    req.session.usuarioId = novoUsuario.id;

    return res.redirect('/cadastro?registro=sucesso'); // Redireciona para a página inicial após o registro bem-sucedido

  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos' });
    }

    // Assuming validarSenha is a method in your Usuario model that compares the provided password with the stored hashed password
    const senhaValida = await usuario.validarSenha(senha);

    if (!senhaValida) {
      return res.status(401).json({ message: 'E-mail ou senha inválidos' });
    }

    req.session.usuarioId = usuario.id;
    return res.json({ message: 'Login realizado com sucesso' });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
