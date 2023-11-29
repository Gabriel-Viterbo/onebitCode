const validCards = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'K',
  'Q',
];
const deckOfCards = [];
let option;
do {
  let formattedCards = ``;
  deckOfCards.forEach((card) => {
    formattedCards += ` [${card}] `;
  });

  option = prompt(`
   ${formattedCards}
----------------------------------------------
    1 - "Adicionar uma Carta"
    2 - "Puxar uma Carta"
    3 - "Encerrar"
    `);

  let newCard;
  let card;
  switch (option) {
    case '1':
      newCard = prompt('Carta: ');
      if (!validCards.includes(newCard.toUpperCase())) {
        alert('Carta inválida');
        break;
      }
      deckOfCards.push(newCard.toUpperCase());
      break;
    case '2':
      if (deckOfCards.length) {
        card = deckOfCards.pop();
        alert(`            Carta Retirada           

                  __________
                 |                 |
                 |       ${card}       |
                 |                 |
                 |__________|
      
      `);
      }
      break;
    case '3':
      break;
    default:
      alert('Opção Inválida');
      break;
  }
} while (option !== '3');
