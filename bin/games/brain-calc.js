#!/usr/bin/env node
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../index.js';

export default function calcGame() {
  const { tryNumbers } = generalLogic;
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  const description = 'What is the result of the expression?';
  const questions = [];
  const correctAnswers = [];
  const calcOperations = ['+', '-', '*'];
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
    questions.push = expression;
    correctAnswers.push = correctAnswer;
  }
  generalLogic(questions, correctAnswers, description);
}

calcGame();
