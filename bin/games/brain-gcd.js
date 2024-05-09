#!/usr/bin/env node
import generalLogic from '../../index.js';
import getRandomNumber from '../../src/rand.js';
import { tryNumbers, maxRandomNumber, minRandomNumber } from '../../src/GameConfig.js';

const description = 'Find the greatest common divisor of given numbers.';

export default function gcdGame() {
  const gameData = [];
  for (let i = 0; i < tryNumbers; i += 1) {
    let number1 = getRandomNumber(minRandomNumber, maxRandomNumber);
    let number2 = getRandomNumber(minRandomNumber, maxRandomNumber);
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
