let properties = [];
let option;
do {
  option = prompt(
    `
      Bem-vindo(a) ao Cadastro de Imóveis!
      Total de Imóveis: ${properties.length}

      Opções Disponíveis:
        1 - Novo Imóvel
        2 - Lista Imóveis
        3 - Sair
      `
  );
  let property;

  const normalizeAndLowerCase = (string) => {
    return string.replace('ã', 'a').toLowerCase();
  };

  switch (option) {
    case '1': {
      property = {};
      property.owner = prompt('Informe o nome do proprietário do imóvel:');
      property.rooms = parseInt(prompt('Quantos quartos possui o imóvel?'));
      property.restrooms = parseInt(
        prompt('Quantos banheiros possui o imóvel?')
      );
      do {
        property.hasGarage = normalizeAndLowerCase(
          prompt('O imóvel possuí garagem? ("Sim" / "Não")')
        );
      } while (property.hasGarage !== 'nao' && property.hasGarage !== 'sim');

      const confirmation = confirm(`
          Salvar esse Imóvel?

          Nome do proprietário: ${property.owner}
          Número de quartos: ${property.rooms}
          Número de banheiros: ${property.restrooms}
          Possui garagem: ${property.hasGarage
            .replace('a', 'ã')
            .replace('n', 'N')
            .replace('s', 'S')}
        `);

      if (confirmation) {
        properties.push(property);
        alert('Propriedade salva com sucesso.');
      }
      alert('Retornando ao menu.');
      break;
    }
    case '2':
      for (let i = 0; i < properties.length; i += 1) {
        const property = properties[i];
        let hasNextProperty = true;
        if (!properties[i + 1]) {
          hasNextProperty = false;
        }
        const confirmation = confirm(`
          Nome do proprietário: ${property.owner}
          Número de quartos: ${property.rooms}
          Número de banheiros: ${property.restrooms}
          Possui garagem: ${property.hasGarage}

          ${hasNextProperty ? 'Exibir a próxima propriedade?' : ''}
        `);

        if (!confirmation) {
          break;
        }
      }
      alert('Retornando ao menu');
      break;
    case '3':
      alert('Programa Encerrado.');
      break;
    default:
      alert('Opção Inválida');
      break;
  }
} while (option !== '3');
