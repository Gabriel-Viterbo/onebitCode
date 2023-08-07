const word = prompt('Palavra a ser verificada');

const reversedWord = word.split('').reverse().join('');

let isPalindrome = false;
if (word === reversedWord) {
  isPalindrome = true;
}

alert(
  `A palavra ${isPalindrome ? 'é' : 'não é'} um palíndromo.\n${
    !isPalindrome ? `Palavra: ${word}\nPalavra Invertida: ${reversedWord}` : ''
  }`
);
