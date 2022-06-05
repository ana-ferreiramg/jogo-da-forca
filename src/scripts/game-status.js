function card(status, message, word) {
  let title = document.querySelector('.game .card h2');
  let text = document.querySelector('.game .card p');

  if (status === 'venceu') {
    title.style.color = 'green';
  } else {
    title.style.color = 'red';
  }
  title.innerHTML = message;
  text.innerHTML = `A palavra era: ${word}`;
}

export { card };
