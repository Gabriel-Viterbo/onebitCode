/* eslint-disable @typescript-eslint/no-unused-vars */
const addPlayer = () => {
  if (!confirm('Escalar Jogador?')) {
    return;
  }

  const position = document.getElementById('position');
  const name = document.getElementById('name');
  const number = document.getElementById('number');

  const playersList = document.getElementById('players-list');

  const playerUl = document.createElement('ul');
  playerUl.id = number.value;

  const positionLi = document.createElement('li');
  positionLi.innerText = 'Posição: ' + position.value;
  playerUl.appendChild(positionLi);

  const nameLi = document.createElement('li');
  nameLi.innerText = 'Nome: ' + name.value;
  playerUl.appendChild(nameLi);

  const numberLi = document.createElement('li');
  numberLi.innerText = 'Número: ' + number.value;
  playerUl.appendChild(numberLi);

  playerUl.appendChild(document.createElement('hr'));
  playersList.appendChild(playerUl);

  position.value = '';
  name.value = '';
  number.value = '';
};

const removePlayer = () => {
  if (!confirm('Remover Jogador?')) {
    return;
  }

  const playersList = document.getElementById('players-list');
  const playerNumber = document.getElementById('number-to-remove');
  const playerToRemove = document.getElementById(playerNumber.value);

  playerNumber.value = '';
  playerToRemove.remove();
};
