const fs = require('fs');
const validateAge = require('../../helpers/validateAge');
const validateName = require('../../helpers/validateName');
const { validateTalk, validateDate, validateRate } = require('../../helpers/validateTalk');
const validateToken = require('../../helpers/validateToken');

function editTalkerUseCase(req, res, _next) {
  const { name, token, age, talk } = req.body;
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
  validateToken(req, res);
  validateName(req, res);
  validateAge(req, res);
  validateTalk(req, res);
  validateDate(req, res);
  validateRate(req, res);
  const talkerToEdit = data.find((talker) => Number(talker.id) === Number(id));
  Object.assign(talkerToEdit, { ...talkerToEdit, name, token, age, talk });
  fs.writeFileSync('talker.json', JSON.stringify(data));
  return talkerToEdit;
}

module.exports = editTalkerUseCase;