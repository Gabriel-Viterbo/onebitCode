const row = [];
let nextPatient = '';
let option;
do {
  let rowAscii = ``;
  row.forEach((patientName, index) => {
    let formattedName = patientName.padStart(20, ' ');
    rowAscii += `${formattedName}   |  ${index + 1}º |\n`;
  });

  option = prompt(
    `Paciente a ser consultado: ${nextPatient}\n\n\n
${rowAscii}

----------------------------------------------
    1 - "Novo paciente"
    2 - "Consulta Próximo Paciente"
    3 - "Encerrar"
    `
  );

  switch (option) {
    case '1':
      row.push(prompt('Nome do paciente'));
      break;
    case '2':
      nextPatient = row.shift();
      break;
    case '3':
      break;
    default:
      alert('Opção Inválida');
      break;
  }
} while (option !== '3');
