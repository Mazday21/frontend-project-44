#!/usr/bin/env node
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../src/index.js';
import { roundsCount, maxRandomNumber, minRandomNumber } from '../../src/GameConfig.js';

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

export default function primeGame() {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const question = randomNumber;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  generalLogic(gameData, description);
}

primeGame();
