#!/usr/bin/env node
import generalLogic from '../../index.js';
import getRandomNumber from '../../src/rand.js';

const tryNumbers = 3;
const maxRandomNumber = 100;
const minRandomNumber = 1;
const description = 'Find the greatest common divisor of given numbers.';

export default function gcdGame() {
  const gameData = [];
  for (let i = 0; i < tryNumbers; i += 1) {
    let number1 = getRandomNumber(minRandomNumber, maxRandomNumber);
    let number2;
    do {
      number2 = getRandomNumber(minRandomNumber, maxRandomNumber);
    } while (number1 === number2);
    const question = `${number1} ${number2}`;
    while (number1 !== 0 && number2 !== 0) {
      if (number1 > number2) {
        number1 %= number2;
      } else {
        number2 %= number1;
      }
    }
    const correctAnswer = number1 + number2;
    gameData.push([question, correctAnswer.toString()]);
  }
  generalLogic(gameData, description);
}

gcdGame();
