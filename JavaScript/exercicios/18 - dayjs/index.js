const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const birthday = (dateOfBirth) => {
  const parsedBirth = dayjs(dateOfBirth, 'DD/MM/YYYY');
  const now = dayjs();
  const age = now.diff(parsedBirth, 'years');

  let nextBirthDay = dayjs(
    new Date(now.year(), parsedBirth.month(), parsedBirth.date())
  );
  if (now.toDate() > nextBirthDay.toDate()) {
    nextBirthDay = dayjs(
      new Date(now.year() + 1, parsedBirth.month(), parsedBirth.date())
    );
  }

  const daysToBirthday = nextBirthDay.diff(now, 'day');

  console.log(`Idade: ${age}`);
  console.log(`Próximo aniversário: ${nextBirthDay.format('DD/MM/YYYY')}`);
  console.log(`Dias até o aniversário: ${daysToBirthday}`);
};

birthday('01/07/2000');
