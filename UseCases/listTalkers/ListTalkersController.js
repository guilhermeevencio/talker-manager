const listTalkersUseCase = require('./ListTalkersUseCase');

function ListTalkerController(_req, res) {
  try {
    const talkers = listTalkersUseCase();
    return res.status(200).json(talkers);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = ListTalkerController;