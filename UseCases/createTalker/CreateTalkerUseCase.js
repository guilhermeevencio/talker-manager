const fs = require('fs');
const validateAge = require('../../helpers/validateAge');
const validateName = require('../../helpers/validateName');
const { validateTalk, validateRate, validateDate } = require('../../helpers/validateTalk');
const validateToken = require('../../helpers/validateToken');

function createTalkerUseCase(req, res, next) {
  const { name, age, talk } = req.body;
  const data = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
  validateToken(req, res);
  validateName(req, res, next);
  validateAge(req, res);
  validateTalk(req, res, next);
  validateDate(req, res);
  validateRate(req, res);
  const talker = {
    name,
    age,
    id: data.length + 1,
    talk,
  };
  data.push(talker);
  fs.writeFileSync('talker.json', JSON.stringify(data));
  return talker;
}

module.exports = createTalkerUseCase;
