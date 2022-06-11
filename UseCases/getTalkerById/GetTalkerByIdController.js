const getTalkerByIdUseCase = require('./GetTalkerByIdUseCase');

function getTalkerByIdController(req, res) {
  try {
    const { id } = req.params;
    const talker = getTalkerByIdUseCase(id);
    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    return res.status(200).json(talker);
  } catch (err) {
    console.log(err.message);
    return res.status(404).json({ message: err.message });
  }
}

module.exports = getTalkerByIdController;