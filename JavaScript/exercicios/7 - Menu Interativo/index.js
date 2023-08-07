let option;
do {
  option = prompt(
    'Escolha uma opção:\n1 - Foo\n2 - Bar\n3 - Foo\n4 - Bar\n5 - Encerrar'
  );
  if (option !== '5') {
    alert('Opção Escolhida: ' + option);
  }
} while (option !== '5');
alert('Sistema encerrado.');
