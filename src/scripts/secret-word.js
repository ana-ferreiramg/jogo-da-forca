// criar palavra secreta
// inserir novas palavras na lista de palavras secretas

let secretWords = ['banana', 'introdução', 'alura', 'cursos'];

function createSecretWord() {
  let index = Math.floor(Math.random() * secretWords.length);
  return secretWords[index];
}

function addNewWord(word) {
  return secretWords.push(word);
}

export { createSecretWord, addNewWord };
