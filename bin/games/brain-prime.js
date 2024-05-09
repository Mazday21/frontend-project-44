#!/usr/bin/env node
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../index.js';
import { tryNumbers, maxRandomNumber, minRandomNumber } from '../../src/GameConfig.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default function primeGame() {
  const gameData = [];
  for (let i = 0; i < tryNumbers; i += 1) {
    const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const question = randomNumber;
    let correctAnswer = 'yes';

    for (let j = 2; j < randomNumber; j += 1) {
      if (randomNumber % j === 0) {
        correctAnswer = 'no';
        break;
      }
    }
    gameData.push([question, correctAnswer]);
  }
  generalLogic(gameData, description);
}

primeGame();
