#!/usr/bin/env node
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../index.js';
import isEven from '../../src/isEven.js';

const tryNumbers = 3;
const maxRandomNumber = 100;
const minRandomNumber = 1;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = [];

export default function evenGame() {
  for (let i = 0; i < tryNumbers; i += 1) {
    const question = getRandomNumber(minRandomNumber, maxRandomNumber);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  generalLogic(gameData, description);
}

evenGame();
