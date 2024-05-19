import generalLogic from '../index.js';
import getRandomNumber from '../rand.js';
import roundsCount from '../roundsCount.js';

const description = 'What number is missing in the progression?';
const amountNums = 10;

function genProg(startNum, diffNum, amounNums, blankPos) {
  const progression = [];
  let correctAnswer;

  for (let j = 0; j < amounNums; j += 1) {
    const currentNumber = startNum + j * diffNum;
    if (j === blankPos) {
      progression.push('..');
      correctAnswer = currentNumber;
    } else {
      progression.push(currentNumber.toString());
    }
  }
  return [progression.join(' '), correctAnswer.toString()];
}

const generateRound = () => {
  const startNum = getRandomNumber();
  const difNum = getRandomNumber();
  const blankPos = getRandomNumber(0, amountNums - 1);
  const [question, answer] = genProg(startNum, difNum, amountNums, blankPos);
  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) { rounds.push(generateRound()); }

  generalLogic(description, rounds);
};
