#!/usr/bin/env node
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../index.js';
import { tryNumbers, maxRandomNumber, minRandomNumber } from '../../src/GameConfig.js';

const description = 'What number is missing in the progression?';
const blank = '..';
const amountNums = 10;
let question = [];

export default function progressiveGame() {
  const gameData = [];
  for (let i = 0; i < tryNumbers; i += 1) {
    question = [];
    const startNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const differenceNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const blankPosition = getRandomNumber(minRandomNumber, amountNums);
    let correctAnswer;
    for (let j = 0; j < amountNums; j += 1) {
      const currentNumber = startNumber + j * differenceNumber;
      if (j === blankPosition) {
        question.push(blank);
        correctAnswer = currentNumber;
      } else {
        question.push(currentNumber.toString());
      }
    }
    gameData.push([question.join(' '), correctAnswer.toString()]);
  }
  generalLogic(gameData, description);
}

progressiveGame();
