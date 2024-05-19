import getRandomNumber from '../rand.js';
import isEven from '../isEven.js';
import gameEngine from '../gameEngine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(description, generateRound);
