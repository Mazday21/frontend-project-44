import generalLogic from '../index.js';
import getRandomNumber from '../rand.js';
import roundsCount from '../roundsCount.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGCD(a, b) {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const answer = findGCD(number1, number2).toString();
  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) { rounds.push(generateRound()); }

  generalLogic(description, rounds);
};
