const validateToken = require('../../helpers/validateToken');
const searchTalkerUseCase = require('./SearchTalkerUseCase');

function searchTalkerController(req, res) {
  const { q } = req.query;
  validateToken(req, res);
  const talker = searchTalkerUseCase(q);
  return res.status(200).json(talker);
}

module.exports = searchTalkerController;