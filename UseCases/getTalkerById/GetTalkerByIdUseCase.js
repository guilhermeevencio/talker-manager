const fs = require('fs');

function getTalkerByIdUseCase(id) {
  console.log(id);
  try {
    const data = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
    const selectedTalker = data.find((talker) => Number(talker.id) === Number(id));
    return (selectedTalker);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    return err.message;
  }
}

module.exports = getTalkerByIdUseCase;