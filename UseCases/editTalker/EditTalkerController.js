const editTalkerUseCase = require('./EditTalkerUseCase');

function editTalkerController(req, res, next) {
  try {
    const editedTalker = editTalkerUseCase(req, res, next);
    return res.status(200).json(editedTalker);
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = editTalkerController;