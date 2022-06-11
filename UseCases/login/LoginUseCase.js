function loginUseCase(_email, _password) {
  try {
  const randomToken = Math.random().toString(15).substring(2, 10)
    + Math.random().toString(15).substring(2, 10);
  return randomToken;
  } catch (error) {
    return error.message;
  }
}

module.exports = loginUseCase;
