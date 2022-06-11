const { loginUseCase } = require('./LoginUseCase');
const validateEmail = require('../../helpers/validateEmail');
const validatePassword = require('../../helpers/validatePassword');

function loginController(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    validateEmail(email, res, next);
    if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    validatePassword(password, res, next);
    const token = loginUseCase(email, password);
    req.token = token;
    return res.status(200).json({ token });
  } catch (error) { return error.message; }
}

module.exports = loginController;