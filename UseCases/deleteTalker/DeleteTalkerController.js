const deleteTalkerUseCase = require('./DeleteTalkerUseCase');

function deleteTalkerController(req, res, next) {
  try {
    deleteTalkerUseCase(req, res, next);
    return res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = deleteTalkerController;