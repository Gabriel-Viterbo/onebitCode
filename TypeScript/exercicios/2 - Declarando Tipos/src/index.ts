type Spaceship = {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
};

const spaceships: Spaceship[] = [
  {
    name: 'a',
    pilot: 'kybas',
    crewLimit: 3,
    crew: [],
    inMission: false,
  },
];

function findStarship() {
  const spaceshipName = prompt('Insira o nome da nave');
  let spaceshipIndex = -1;

  do {
    spaceshipIndex = spaceships.findIndex(
      (spaceship) => spaceship.name === spaceshipName
    );
  } while (spaceshipIndex < 0);
  return spaceships[spaceshipIndex];
}

function registerSpaceship() {
  const name = prompt('Insira o nome da nave a ser registrada: ') || '';
  const pilot = prompt(`Insira o nome do piloto da ${name}: `) || '';
  const crewLimit = Number(prompt(`Informe o limite de tripulação da ${name}`));

  spaceships.push({ name, pilot, crewLimit, crew: [], inMission: false });
}

function registerMember() {
  const spaceship = findStarship();
  if (spaceship.crew.length < spaceship.crewLimit) {
    const memberName = prompt('Insira o nome do tripulante: ') || '';
    spaceship.crew.push(memberName);
    alert('Tripulante inserido.');
  } else {
    alert('Limite da tripulação atingido.');
  }
}

function sendSpaceshipToMission() {
  const spaceship = findStarship();

  if (spaceship.inMission) {
    alert(`Nave ${spaceship.name} já está em missão`);
    return;
  }

  if (spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
    spaceship.inMission = true;
    alert(`Nave ${spaceship.name} enviada em missão.`);
    return;
  }

  alert(
    `Nave ${spaceship.name} ainda não atingiu o limite mínimo de tripulantes`
  );
}

function listSpaceships() {
  spaceships.forEach((spaceship) => console.log(spaceship));
}
