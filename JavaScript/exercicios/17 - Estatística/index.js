/* eslint-disable @typescript-eslint/no-unused-vars */
const Mean = (...numbers) => {
  const sum = numbers.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);
  return sum / numbers.length;
};

const weightedMean = (...numbersWithWeight) => {
  let sum = 0;
  let totalWeight = 0;
  numbersWithWeight.forEach((obj) => {
    sum += obj.n * obj.p;
    totalWeight += obj.p;
  });

  return sum / totalWeight;
};

const median = (...numbers) => {
  numbers.sort((a, b) => {
    return a - b;
  });

  const arrayIsOdd = !!(numbers.length % 2);

  if (arrayIsOdd) {
    return numbers[Math.floor(numbers.length / 2)];
  }
  return [
    numbers[Math.floor(numbers.length / 2) - 1],
    numbers[Math.floor(numbers.length / 2)],
  ];
};

const mode = (...numbers) => {
  const numbersMode = {};
  numbers.forEach((number) => {
    if (!numbersMode[number]) {
      numbersMode[number] = 1;
    } else {
      numbersMode[number] += 1;
    }
  });

  let higherValue = 0;
  let modeNumber;
  Object.entries(numbersMode).forEach(([key, value]) => {
    if (higherValue < value) {
      higherValue = value;
      modeNumber = key;
    }
  });
  return modeNumber;
};
