const jobs = [];

const listJobs = () => {
  if (!jobs.length) {
    alert('Nenhuma Vaga Cadastrada.');
    return;
  }
  const formattedJobs = jobs.map((job, index) => {
    return `${index}: ${job.name} (${job.candidates.length} ${
      job.candidates.length > 1 ? 'candidatos' : 'candidato'
    })`;
  });
  alert(formattedJobs.join('\n'));
};

const createJob = () => {
  const job = {};
  job.name = prompt('Informe um nome:');
  job.description = prompt('Informe uma descrição:');
  job.limitDate = prompt('Insira a data limite para a vaga (dd/mm/aaaa):');

  const shouldRegisterJob = confirm(`
    Confirmar cadastro da vaga?

    Informações da vaga:
        Nome: ${job.name}
        Descrição: ${job.description}
        Data limite: ${job.limitDate}
  `);

  if (shouldRegisterJob) {
    job.candidates = [];
    jobs.push(job);
    alert('Vaga Cadastrada.');
  }
};

const listCandidates = (jobIndex) => {
  const job = jobs[jobIndex];
  const formattedCandidates = job.candidates.map((candidate, index) => {
    return `${index}: ${candidate.name}`;
  });
  return formattedCandidates.join('\n');
};

const getJob = (jobIndex) => {
  const job = jobs[jobIndex];
  if (!job) {
    alert('índice informado nao existe.');
    return;
  }

  return `
    Informações da vaga:
        Índice: ${jobIndex}
        Nome: ${job.name}
        Descrição: ${job.description}
        Data limite: ${job.limitDate}
        Candidatos (${job.candidates.length || 0}):
          ${listCandidates(jobIndex)}
  `;
};

const applyCandidate = (jobIndex) => {
  const job = getJob(jobIndex);
  if (job) {
    const candidateName = prompt('Nome do candidato: ');
    const shouldApplyCandidate = confirm(`
    Deseja aplicar o candidato ${candidateName} à vaga:
    ${job}
  `);

    if (shouldApplyCandidate) {
      jobs[jobIndex].candidates.push({ name: candidateName });
      alert('Candidato aplicado a vaga.');
    }
  }
};

const deleteJob = (jobIndex) => {
  const deletedJob = jobs.splice(jobIndex, 1);
  if (deletedJob.length) {
    alert('Vaga deletada.');
  }
};

let option;
do {
  option = prompt(
    `
      Bem-vindo(a) ao Sistema de Vagas de Emprego!
      Total de Vagas Disponíveis: ${jobs.length}

      Opções Disponíveis:
        1 - Listar Vagas Disponível
        2 - Criar uma Nova Vaga
        3 - Visualizar uma Vaga
        4 - Inscrever um Candidato em uma Vaga
        5 - Excluir uma Vaga
        6 - Sair
      `
  );

  switch (option) {
    case '1':
      listJobs();
      break;
    case '2':
      createJob();
      alert('Retornando ao Menu.');
      break;
    case '3': {
      const job = getJob(parseInt(prompt('Índice da Vaga: ')));
      if (job) {
        alert(job);
      }
      alert('Retornando ao Menu.');
      break;
    }
    case '4':
      applyCandidate(parseInt(prompt('Índice da Vaga: ')));
      alert('Retornando ao Menu.');
      break;
    case '5':
      deleteJob(parseInt(prompt('Índice da Vaga: ')));
      alert('Retornando ao Menu.');
      break;
    case '6':
      alert('Programa Encerrado.');
      break;
    default:
      alert('Opção Inválida');
      break;
  }
} while (option !== '6');
