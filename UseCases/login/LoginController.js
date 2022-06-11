const loginUseCase = require('./LoginUseCase');

function loginController(req, res) {
  try {
    const { email, password } = req.body;
    const token = loginUseCase(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return error.message;
  }
}

module.exports = loginController;