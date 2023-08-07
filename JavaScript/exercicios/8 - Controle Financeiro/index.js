let money;
let currentMoney = parseFloat(prompt('Quantidade Inicial de dinheiro'));
do {
  option = prompt(
    `
      Dinheiro Disponível: ${currentMoney}
      Opções Disponíveis:
        1 - Adicionar
        2 - Remover
        3 - Sair
      `
  );
  switch (option) {
    case '1':
      currentMoney += parseFloat(prompt('Quantidade a ser adicionada: R$'));
      break;
    case '2':
      currentMoney -= parseFloat(prompt('Quantidade a ser adicionada: R$'));
      break;
    case '3':
      alert('Programa Encerrado.');
      break;
    default:
      alert('Opção Inválida');
      break;
  }
} while (option !== '3');
