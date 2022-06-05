function messageText(section, text, status) {
  let card = document.querySelector('.game-display .message-card');
  let card2 = document.querySelector('.new-word span.message-card');
  let inputCard = document.querySelector('.game-display #enterLetter');
  let textCard2 = document.querySelector('.new-word span.message-card');

  if (section === 'game') {
    card.classList.add('active');
    card.innerHTML = `${text}`;
  }

  if (section === 'addWord') {
    card2.classList.add('active');
    card2.innerHTML = `${text}`;
    textCard2.style.color = 'red';
  }

  if (status === 'Aviso') {
    inputCard.style.borderColor = 'red';
  }

  setTimeout(function () {
    card.classList.remove('active');
    card2.classList.remove('active');
  }, 3000);

  clearTimeout(messageText);
}

export { messageText };
