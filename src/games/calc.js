import generalLogic from '../index.js';
import getRandomNumber from '../rand.js';
import roundsCount from '../roundsCount.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => { const operators = ['+', '-', '*']; return operators[getRandomNumber(0, operators.length - 1)]; };

const calculation = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculation(num1, num2, operator));

  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) { rounds.push(generateRound); }

  generalLogic(description, rounds);
};