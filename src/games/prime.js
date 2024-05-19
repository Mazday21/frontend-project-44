import getRandomNumber from '../rand.js';
import gameEngine from '../gameEngine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const generateRound = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(description, generateRound());
