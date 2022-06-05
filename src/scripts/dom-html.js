import { createSecretWord, addNewWord, init } from './secret-word.js';
import { forca, hangman, clearCanvas } from './canvas.js';
import { isLetter, uppercaseLettersOnly } from './verify-data.js';
import { messageText } from './messages.js';
import { alreadyExists } from './verify-data.js';
import { card } from './game-status.js';

let lettersArray = [];
let secretWord,
  mistakes = 0,
  attempts = 6;
let inputLetters = document.querySelector('.game-display #enterLetter');
let lettersDashes = document.querySelector('.game-word .dashes');
let showLetters = document.querySelector('.game-word .letters');
let showWord = document.querySelector('.new-word #newWord');

function displayTypedLetters(letter) {
  if (alreadyExists(letter, lettersArray) === -1) {
    lettersArray.push(letter);

    if (mistakes < attempts) {
      mistakes++;
      hangman(mistakes);
    }
  }

  if (mistakes === attempts) {
    DOM.card.classList.add('active');
    card('perdeu', 'VOCÊ PERDEU!', secretWord);
  }

  showLetters.innerHTML = lettersArray;
}

function displayLettersDashes(secretWord, letter) {
  let letters = secretWord.split('');
  let word = document.querySelectorAll('.game-word .dashes span');
  let wordArray = Object.values(word);

  if (alreadyExists(letter, letters) !== -1) {
    letters.forEach(() => {
      let getListLetters = document.querySelectorAll(`.${letter}`);
      getListLetters.forEach((el) => el.classList.add('active'));
    });
  } else {
    displayTypedLetters(letter);
  }

  word.forEach((el) => {
    if (el.classList.contains('active')) {
      el.status = true;
    } else {
      el.status = false;
    }
  });

  if (wordArray.every((el) => el.status === true)) {
    DOM.card.classList.add('active');
    card('venceu', 'VOCÊ VENCEU!', secretWord);
  }
}

function dashes(secretWord) {
  let amountLetters = secretWord.length;

  for (let i = 0; i < amountLetters; i++) {
    let boxLetter = document.createElement('span');

    lettersDashes.appendChild(boxLetter);
    boxLetter.innerHTML += `${secretWord[i]}`;
    boxLetter.classList.add(`${secretWord[i]}`);
  }
}

function clearDisplay() {
  inputLetters.value = '';
  showLetters.innerHTML = '';
  lettersDashes.innerHTML = '';
  showWord.value = '';
  attempts = 6;
  mistakes = 0;
  lettersArray = [];
}

const MENU = {
  btnStart: document.querySelector('.start-game'),
  btnAddNewWord: document.querySelector('.add-word'),
  btnNewGame: document.querySelector('.new-game'),
  btnShowAnswer: document.querySelector('.show-answer'),
};

const DOM = {
  getLetter: document.querySelector('.game-display #enterLetter'),
  newWord: document.querySelector('#newWord'),
  btnBackToMenu: document.querySelector('header .back'),
  btnAddWord: document.querySelector('.btn-add-word'),
  btnCancel: document.querySelector('.back.cancel'),
  btnGiveUp: document.querySelector('.game .give-up'),
  btnCard: document.querySelector('.card .game-over'),
  sectionMenu: document.querySelector('.menu'),
  sectionNewWord: document.querySelector('.new-word'),
  sectionGame: document.querySelector('.game'),
  card: document.querySelector('.game .card'),
};

function start() {
  let secretWordsList = init();

  DOM.btnBackToMenu.addEventListener('click', () => {
    DOM.btnBackToMenu.classList.toggle('active');
    DOM.sectionMenu.classList.toggle('active');
    DOM.sectionGame.classList.remove('active');
    DOM.sectionNewWord.classList.remove('active');
    clearDisplay();
  });

  DOM.btnCancel.addEventListener('click', () => {
    DOM.btnBackToMenu.classList.toggle('active');
    DOM.sectionMenu.classList.toggle('active');
    DOM.sectionNewWord.classList.toggle('active');
    clearDisplay();
  });

  DOM.btnCard.addEventListener('click', () => {
    DOM.btnBackToMenu.classList.toggle('active');
    DOM.sectionMenu.classList.toggle('active');
    DOM.sectionGame.classList.remove('active');
    DOM.card.classList.remove('active');
    clearDisplay();
  });

  DOM.btnGiveUp.addEventListener('click', () => {
    DOM.card.classList.add('active');
    card('perdeu', 'VOCÊ PERDEU!', secretWord);
  });

  MENU.btnStart.addEventListener('click', () => {
    DOM.btnBackToMenu.classList.toggle('active');
    DOM.sectionMenu.classList.toggle('active');
    DOM.sectionGame.classList.toggle('active');
    secretWord = createSecretWord();

    DOM.getLetter.style.borderColor = 'var(--dark-300)';
    clearCanvas();
    clearDisplay();
    forca();
    dashes(secretWord);
  });

  MENU.btnAddNewWord.addEventListener('click', () => {
    DOM.btnBackToMenu.classList.toggle('active');
    DOM.sectionMenu.classList.toggle('active');
    DOM.sectionNewWord.classList.toggle('active');
  });

  DOM.newWord.addEventListener('keydown', (e) => {
    let message = document.querySelector('.message-card');
    let letter = e.key.toUpperCase();

    DOM.newWord.style.borderColor = 'transparent';

    if (!isLetter(letter)) {
      message.classList.remove('active');
      console.log('Digite apenas letras');
    }
  });

  DOM.btnAddWord.addEventListener('click', () => {
    let wordInput = DOM.newWord.value;
    let { status, word } = uppercaseLettersOnly(wordInput);
    DOM.newWord.value = '';

    if (status) {
      if (secretWordsList.indexOf(word) === -1) {
        addNewWord(word);
      } else {
        messageText('addWord', 'Essa palavra já existe na lista!', 'Aviso');
      }
    } else {
      messageText('addWord', 'DIGITE APENAS LETRAS!', 'Aviso');
    }
  });

  DOM.getLetter.addEventListener('keydown', (e) => {
    let key = e.which || e.keyCode;
    let message = document.querySelector('.game-display .message-card');
    let letter = e.key.toUpperCase();

    DOM.getLetter.value = '';
    DOM.getLetter.style.borderColor = 'var(--dark-300)';
    message.classList.remove('active');

    if (isLetter(letter)) {
      displayLettersDashes(secretWord, letter);
    }

    if (!isLetter(letter)) {
      messageText('game', 'Digite apenas letras!', 'Aviso');
    }
  });
}

export { start };
