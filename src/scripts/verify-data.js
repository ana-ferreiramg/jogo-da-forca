function isLetter(letter) {
  if (letter.length === 1) {
    letter = letter.toUpperCase();
    let regex = /^[A-Z]+$/g;
    let isLetter = regex.test(letter);

    return isLetter ? true : false;
  }
}

function uppercaseLettersOnly(word) {
  let letters = word.split('');
  let regex = /^[a-z]+$/i;
  let letter;

  letters.forEach((el) => {
    letter = regex.test(el);
  });

  if (letter) {
    return { status: true, word: word.toUpperCase() };
  } else {
    return { status: false, word: word };
  }
}

function alreadyExists(element, array) {
  return array.indexOf(element);
}

export { isLetter, uppercaseLettersOnly, alreadyExists };
