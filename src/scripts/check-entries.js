// Verificar se a chave pressionada é uma letra
// Só deve ser possívél escrever letras (os números não serão válidos)
// Verificar se a letra pressionada está dentro da palavra secreta
// Deve funcionar só com letras maiúsculas
// Não devem ser utilizadas letras com acentos nem caracteres especiais
function isLetter(letter) {
  letter = letter.toUpperCase();
  let regex = /[A-Z]+$/g;
  let isLetter = regex.test(letter);

  return isLetter ? true : false;
}

export { isLetter };
