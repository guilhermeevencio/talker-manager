const fs = require('fs');

function listTalkersUseCase() {
  try {
    const data = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
    if (data.length === 0) return ([]); 
    return (data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    return err.message;
  }
}

module.exports = listTalkersUseCase;