const { Carrinho } = require('../models/carrinho');
const { Anuncio } = require('../models/anuncios');

exports.carrinhoView = async (req, res) => {
  const usuarioId = req.session.usuarioId;
  if (!usuarioId) return res.redirect('/login');

  try {
    const itens = await Carrinho.findAll({
      where: { usuarioId },
      include: [{ model: Anuncio, as: 'anuncio' }]
    });
    const total = itens.reduce((sum, item) => sum + Number(item.anuncio.preco), 0);
    res.render('carrinho', { itens, total });
  } catch (error) {
    res.status(500).send('Erro ao carregar o carrinho');
  }
};

exports.adicionarAoCarrinho = async (req, res) => {
  const usuarioId = req.session.usuarioId;
  const { anuncioId } = req.body;

  if (!usuarioId) return res.redirect('/login'); 

  try {
    await Carrinho.create({ usuarioId, anuncioId });
    res.json({ message: 'Adicionado ao carrinho!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar ao carrinho' });
  }
};

exports.removerDoCarrinho = async (req, res) => {
  const usuarioId = req.session.usuarioId;
  const { anuncioId } = req.body;

  try {
    await Carrinho.destroy({ where: { usuarioId, anuncioId } });
    res.json({ message: 'Removido do carrinho!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover do carrinho' });
  }
};

exports.listarCarrinho = async (req, res) => {
  const usuarioId = req.session.usuarioId;
  try {
    const itens = await Carrinho.findAll({
      where: { usuarioId },
      include: [{ model: Anuncio, as: 'anuncio' }]
    });
    res.json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar carrinho' });
  }
};
