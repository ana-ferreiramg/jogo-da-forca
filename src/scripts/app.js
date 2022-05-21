// mostrar jogo/iniciar jogo
import { createSecretWord, addNewWord } from './secret-word.js';
import { forca, hangman } from './gameboard.js';

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
  // mostrar section do jogo
  DOM.btnBackToMenu.classList.toggle('active');
  DOM.sectionMenu.classList.toggle('active');
  DOM.sectionGame.classList.toggle('active');

  forca();
  hangman(1);
});

MENU.btnAddNewWord.addEventListener('click', () => {
  // mostrar section para adicionar palavra
});
