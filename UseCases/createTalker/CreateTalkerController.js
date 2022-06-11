const createTalkerUseCase = require('./CreateTalkerUseCase');

function createTalkerController(req, res, next) {
  try {
    const talker = createTalkerUseCase(req, res, next);
    return res.status(201).json(talker);
  } catch (err) {
    return err.message;
  }
}

module.exports = createTalkerController;