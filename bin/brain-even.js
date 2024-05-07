#!/usr/bin/env node
import readlineSync from 'readline-sync';
import readUsername from '../src/cli.js';

function isEven(number) {
  return number % 2 === 0;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function evenGame() {
  const tryNumbers = 3;
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  console.log('Welcome to the Brain Games!');
  const userName = readUsername();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < tryNumbers; i += 1) {
    const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

evenGame();
