onload = () => {
  const name = prompt('Nome:');

  const cities = [];

  hasVisited = confirm('Já visitou alguma cidade a mais?');
  while (hasVisited) {
    cities.push(prompt('Nome da cidade:'));
    hasVisited = confirm('Já visitou alguma cidade a mais?');
  }

  const container = document.getElementById('container');

  container.innerText = `
    Nome do Turista: ${name}
    Número de cidades visitadas: ${cities.length}
    Cidades: ${cities.join(', ')}
  `;
};
