const fs = require('fs');
const validateToken = require('../../helpers/validateToken');

function deleteTalkerUseCase(req, res, _next) {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
  validateToken(req, res);
  const filteredData = data.filter((talker) => Number(talker.id) !== Number(id));
  fs.writeFileSync('talker.json', JSON.stringify(filteredData));
}

module.exports = deleteTalkerUseCase;