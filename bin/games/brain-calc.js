#!/usr/bin/env node
/* eslint-disable no-eval */
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../index.js';

const { tryNumbers } = generalLogic;
const maxRandomNumber = 100;
const minRandomNumber = 1;
const description = 'What is the result of the expression?';
const calcOperations = ['+', '-', '*'];
const gameData = [];

export default function calcGame() {
  for (let i = 0; i < tryNumbers; i += 1) {
    const num1 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const num2 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const operation = calcOperations[getRandomNumber(0, calcOperations.length - 1)];
    const question = `${num1} ${operation} ${num2}`;
    let correctAnswer;

    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }

    gameData.push([question, correctAnswer.toString()]);
  }
  generalLogic(gameData, description);
}

calcGame();
