const number = parseFloat(prompt('Número a ser utilizado na taboada'));

let multiplicationTable = '';
for (let i = 1; i <= 20; i++) {
  multiplicationTable += `${number} x ${i} = ${number * i}\n`;
}

alert(multiplicationTable);
