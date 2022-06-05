import { alreadyExists } from './verify-data.js';

function init() {
  let secretWords = JSON.parse(localStorage.getItem('jogo-da-forca')) || ['HACKER', 'PYTHON', 'ALURA', 'CURSOS'];
  localStorage.setItem('jogo-da-forca', JSON.stringify(secretWords));

  return secretWords;
}

function createSecretWord() {
  let listWords = init();
  let index = Math.floor(Math.random() * listWords.length);

  return listWords[index];
}

function addNewWord(word) {
  let listWords = JSON.parse(localStorage.getItem('jogo-da-forca'));
  const exist = alreadyExists(word, listWords);

  if (exist === -1) {
    listWords.push(word);
  } else {
    console.log('Essa palavra já existe na lista!');
  }

  localStorage.setItem('jogo-da-forca', JSON.stringify(listWords));
}

export { createSecretWord, addNewWord, init };
