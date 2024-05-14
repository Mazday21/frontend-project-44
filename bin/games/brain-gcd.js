#!/usr/bin/env node
import generalLogic from '../../src/index.js';
import getRandomNumber from '../../src/rand.js';
import { roundsCount, maxRandomNumber, minRandomNumber } from '../../src/GameConfig.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGCD(a, b) {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

export default function gcdGame() {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomNumber(minRandomNumber, maxRandomNumber);
    let number2;
    do {
      number2 = getRandomNumber(minRandomNumber, maxRandomNumber);
    } while (number1 === number2);
    const question = `${number1} ${number2}`;
    const correctAnswer = findGCD(number1, number2).toString();
    gameData.push([question, correctAnswer]);
  }
  generalLogic(gameData, description);
}

gcdGame();
