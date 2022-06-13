const fs = require('fs');

function searchTalkerUseCase(searchTerm) {
  const data = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
  const searchResult = data.filter((talk) => talk.name.match(searchTerm));
  console.log(searchResult);
  return searchResult;
}

module.exports = searchTalkerUseCase;