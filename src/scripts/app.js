// mostrar jogo/iniciar jogo
import { createSecretWord, addNewWord } from './secret-word.js';
import { forca, hangman, dashes, clearCanvas } from './gameboard.js';
import { displayLettersDashes, displayTypedLetters } from './display-letters.js';
import { isLetter } from './check-entries.js';
import { messageText } from './messages.js';

// let btn = document.querySelector('#addWord');
// btn.addEventListener('click', () => {
//   let input = document.querySelector('#newWord');
//   addNewWord(input.value);
//   input.value = '';
// });

const MENU = {
  btnStart: document.querySelector('#start-game'),
  btnAddNewWord: document.querySelector('#add-word'),
  btnNewGame: document.querySelector('#new-game'),
  btnShowAnswer: document.querySelector('#show-answer'),
};

const DOM = {
  getLetter: document.querySelector('.display #enterLetter'),
  btnBackToMenu: document.querySelector('.back'),
  sectionMenu: document.querySelector('#menu'),
  sectionNewWord: document.querySelector('#add-new-word'),
  sectionGame: document.querySelector('#game'),
};

DOM.btnBackToMenu.addEventListener('click', () => {
  DOM.btnBackToMenu.classList.toggle('active');
  DOM.sectionMenu.classList.toggle('active');
  DOM.sectionGame.classList.remove('active');
  DOM.sectionNewWord.classList.remove('active');
});

MENU.btnStart.addEventListener('click', () => {
  DOM.btnBackToMenu.classList.toggle('active');
  DOM.sectionMenu.classList.toggle('active');
  DOM.sectionGame.classList.toggle('active');
  let secretWord = createSecretWord();

  clearCanvas();
  forca();
  dashes(secretWord);
});

MENU.btnAddNewWord.addEventListener('click', () => {
  // mostrar section para adicionar palavra
});

DOM.getLetter.addEventListener('keydown', (e) => {
  let key = e.which || e.keyCode;
  let message = document.querySelector('.display #message-card');
  let letter = e.key.toUpperCase();

  DOM.getLetter.value = '';
  DOM.getLetter.style.borderColor = 'var(--dark-300)';
  message.classList.remove('active');

  if (isLetter(letter)) {
    displayTypedLetters(letter);

    if (key === 13) {
      displayLettersDashes(createSecretWord(), DOM.getLetter.value);
    }
  } else {
    messageText('Digite apenas letras!', 'Aviso');
  }
});
