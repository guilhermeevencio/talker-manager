function validateEmail(email, res, next) {
  const emailFormat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailFormat)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  next();
}

// verificar se tem outra maneira de escrever essa parte do codigo

module.exports = validateEmail;