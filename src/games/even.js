import getRandomNumber from '../getRandomNumber.js';
import gameEngine from '../gameEngine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

const generateRound = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(description, generateRound);
