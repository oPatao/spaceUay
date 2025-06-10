const {Anuncio} = require('../models/anuncios');

exports.createAnuncio = async (req, res) => {
    const { titulo, descricao, planeta, preco } = req.body;
    const usuarioId = req.session.usuarioId; // Assuming you store user ID in session

    try {
        const novoAnuncio = await Anuncio.create({
            titulo,
            descricao,
            planeta,
            preco,
            usuarioId
        });

        return res.redirect('/'); // Redirect to home or anuncio success page
    } catch (error) {
        console.error('Erro ao criar anúncio:', error);
        return res.status(500).json({ message: 'Erro interno ao criar anúncio' });
    }
};