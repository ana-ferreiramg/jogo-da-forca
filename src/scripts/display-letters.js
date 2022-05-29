// Escrever Letra Correta
// Escrever letra Incorreta
// As letras erradas devem aparecer na tela, mas não podem aparecer repetidamente
import { messageText } from './messages.js';

let lettersArray = [];

function displayTypedLetters(letter) {
  let showLetters = document.querySelector('.word #letters');

  if (lettersArray.indexOf(letter) === -1) {
    lettersArray.push(letter);
  } else {
    messageText('Letra repetida!', 'Aviso');
  }
  showLetters.innerHTML = lettersArray;
}

function displayLettersDashes(secretWord, letter) {
  // As letras corretas devem ser mostradas na tela acima dos traços, nas posições corretas em relação à palavra.

  let letters = secretWord.split('');

  // se verdadeiro, desenhar a letra correspondente no canvas, se não, escrever letra na área de letras erradas
  letters.filter((lettersElement) => (lettersElement === letter ? console.log(lettersElement, letter) : console.log('É diferente')));
}

export { displayLettersDashes, displayTypedLetters };
