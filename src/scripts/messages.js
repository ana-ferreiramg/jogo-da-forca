// Desenhar Mensagem "Você Perdeu"
// Desenhar Mensagem "Você Venceu"
// Ao completar o desenho da forca, deve ser exibida uma mensagem na tela de "Fim de Jogo"
// Se completar a palavra correta antes de acabarem as tentativas, deve ser exibida na tela a mensagem "Você Venceu. Parabéns!"

function messageText(status) {
  let messageCard = document.querySelector('.display #message-card');

  return status === 'win' ? (messageCard.value = 'Você venceu!') : (messageCard.value = 'Você perdeu!');
}

export { messageText };
