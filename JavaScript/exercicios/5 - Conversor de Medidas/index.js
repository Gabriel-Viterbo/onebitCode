convert = () => {
  const select = document.getElementById('select').value;
  console.log(select);
  let divisor;
  switch (select) {
    case 'mm':
      divisor = 0.001;
      break;
    case 'cm':
      divisor = 0.01;
      break;
    case 'dm':
      divisor = 0.1;
      break;
    case 'dam':
      divisor = 10;
      break;
    case 'hm':
      divisor = 100;
      break;
    case 'km':
      divisor = 1000;
      break;
    default:
      alert('Opção Inválida');
  }

  const inputNumber = document.getElementById('number').value;
  const result = document.getElementById('result');
  result.innerText = `Resultado: ${inputNumber / divisor}${select}`;
};
