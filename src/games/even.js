import generalLogic from '../index.js';
import getRandomNumber from '../rand.js';
import isEven from '../isEven.js';
import roundsCount from '../roundsCount.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) { rounds.push(generateRound()); }

  generalLogic(description, rounds);
};
