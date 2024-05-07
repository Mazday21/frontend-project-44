#!/usr/bin/env node
import readlineSync from 'readline-sync';
import readUsername from '../src/cli.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function calcGame() {
  const tryNumbers = 3;
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  const calcOperations = ['+', '-', '*'];
  console.log('Welcome to the Brain Games!');
  const userName = readUsername();
  console.log('What is the result of the expression?');
  for (let i = 0; i < tryNumbers; i += 1) {
    const firstRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const secondRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const randomOperation = calcOperations[getRandomNumber(0, calcOperations.length - 1)];
    let correctAnswer;
    switch (randomOperation) {
      case '+':
        correctAnswer = firstRandomNumber + secondRandomNumber;
        break;
      case '-':
        correctAnswer = firstRandomNumber - secondRandomNumber;
        break;
      case '*':
        correctAnswer = firstRandomNumber * secondRandomNumber;
        break;
      default:
        correctAnswer = undefined;
    }
    const expression = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;
    console.log(`Question: ${expression}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

calcGame();
