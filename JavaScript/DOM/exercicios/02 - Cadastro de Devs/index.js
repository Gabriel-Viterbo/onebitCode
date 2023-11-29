const devs = [];
let techCount = 0;

const addTechnology = () => {
  techCount += 1;
  const form = document.getElementById('technologies');
  const techNameLabel = document.createElement('label');
  techNameLabel.htmlFor = 'techName' + techCount;
  techNameLabel.innerText = `Nome da Tecnologia ${techCount}: `;

  const techNameInput = document.createElement('input');
  techNameInput.type = 'text';
  techNameInput.name = 'techName' + techCount;
  techNameInput.id = 'techName' + techCount;

  const techExperienceLabel = document.createElement('label');
  techExperienceLabel.innerText = 'Tempo de Experiência: ';
  // techExperienceLabel.htmlFor = 'techExperience';

  const techExperienceOption1 = document.createElement('input');
  techExperienceOption1.type = 'radio';
  techExperienceOption1.name = 'techExperience' + techCount;
  techExperienceOption1.id = 'techExperienceOption1' + techCount;
  techExperienceOption1.value = '0-2';

  const techExperienceOption1Label = document.createElement('label');
  techExperienceOption1Label.htmlFor = 'techExperienceOption1' + techCount;
  techExperienceOption1Label.innerText = '0-2 anos';

  const techExperienceOption2 = document.createElement('input');
  techExperienceOption2.type = 'radio';
  techExperienceOption2.name = 'techExperience' + techCount;
  techExperienceOption2.id = 'techExperienceOption2' + techCount;
  techExperienceOption2.value = '3-4';

  const techExperienceOption2Label = document.createElement('label');
  techExperienceOption2Label.htmlFor = 'techExperienceOption2' + techCount;
  techExperienceOption2Label.innerText = '3-4 anos';

  const techExperienceOption3 = document.createElement('input');
  techExperienceOption3.type = 'radio';
  techExperienceOption3.name = 'techExperience' + techCount;
  techExperienceOption3.id = 'techExperienceOption3' + techCount;
  techExperienceOption3.value = '5+';

  const techExperienceOption3Label = document.createElement('label');
  techExperienceOption3Label.htmlFor = 'techExperienceOption3' + techCount;
  techExperienceOption3Label.innerText = '5+ anos';

  const removeTecButton = document.createElement('button');
  removeTecButton.innerText = 'Remover';
  removeTecButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    techCount -= 1;
    ev.currentTarget.parentElement.remove();
  });

  const nameP = document.createElement('p');
  nameP.append(techNameLabel, techNameInput);

  const techExperienceP = document.createElement('p');
  techExperienceP.append(
    techExperienceLabel,
    document.createElement('br'),
    techExperienceOption1,
    techExperienceOption1Label,
    document.createElement('br'),
    techExperienceOption2,
    techExperienceOption2Label,
    document.createElement('br'),
    techExperienceOption3,
    techExperienceOption3Label,
    document.createElement('br')
  );

  const technologyP = document.createElement('p');
  technologyP.append(nameP, techExperienceP, removeTecButton);
  technologyP.id = 'tech';
  form.append(technologyP);
};

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('technologies');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const devName = document.getElementById('devName').value;

    const techs = form.querySelectorAll('#tech');
    const formattedTechs = [];
    techs.forEach((tech) => {
      const techInputs = tech.querySelectorAll('input');
      const techNameProperty = techInputs[0].name;
      const techExperienceProperty = techInputs[techInputs.length - 1].name;
      console.log(techNameProperty);
      //  Quando adiciona duas e remove a primeira da erro
      const techName = tech.querySelector(
        `input[name = "${techNameProperty}"]`
      ).value;

      const experience = tech.querySelector(
        `input[name = "${techExperienceProperty}"]:checked`
      ).value;

      formattedTechs.push({
        techName,
        experience,
      });
    });

    devs.push({
      devName,
      technologies: formattedTechs,
    });
    form.innerHTML = '<button type="submit">Cadastrar</button>';
    techCount = 0;
    console.log(devs);
  });
});

// TODO: o evento está sendo disparado mais de uma vez quando existem mais de uma tecnologia
