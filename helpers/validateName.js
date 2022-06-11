function validateName(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
    message: 'O campo "name" é obrigatório',
    });
  }
  if (name.length < 3) {
      return res.status(400).send({
      message: 'O "name" deve ter pelo menos 3 caracteres',
      });
  }
}

module.exports = validateName;