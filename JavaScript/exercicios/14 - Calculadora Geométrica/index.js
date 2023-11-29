const area = (widht, height) => {
  return widht * height;
};

const triangleArea = () => {
  const widht = parseFloat(prompt('Base do triângulo:'));
  const height = parseFloat(prompt('Altura do triângulo:'));

  return area(widht, height) / 2;
};

const rectangleArea = () => {
  const widht = parseFloat(prompt('Base do Retângulo:'));
  const height = parseFloat(prompt('Altura do Retângulo:'));

  return area(widht, height);
};

const squareArea = () => {
  const height = parseFloat(prompt('Lado do quadrado:'));

  return area(height, height);
};

const trapezeArea = () => {
  const smallSide = parseFloat(prompt('Base maior do trapézio:'));
  const largeSide = parseFloat(prompt('Base maior do trapézio:'));
  const height = parseFloat(prompt('Altura do trapézio:'));

  return ((smallSide + largeSide) * height) / 2;
};

const circleArea = () => {
  const radius = parseFloat(prompt('Raio do circulo:'));

  return Math.PI * radius ** 2;
};

let option;
do {
  option = prompt(
    `
      Bem-vindo(a) ao Calculadora Geométrica!

      Opções Disponíveis:
        1 - Área do Triângulo
        2 - Área do Retângulo
        3 - Área do Quadrado
        4 - Área do Trapézio
        5 - Área do Círculo
        6 - Sair
      `
  );
  switch (option) {
    case '1': {
      alert(triangleArea());
      break;
    }
    case '2': {
      alert(rectangleArea());
      break;
    }
    case '3': {
      alert(squareArea());
      break;
    }
    case '4': {
      alert(trapezeArea());
      break;
    }
    case '5': {
      alert(circleArea());
      break;
    }
    case '6':
      alert('Programa Encerrado.');
      break;
    default:
      alert('Opção Inválida');
      break;
  }
} while (option !== '6');
