#!/usr/bin/env node
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../index.js';
import isEven from '../../src/isEven.js';

export default function evenGame() {
  const { tryNumbers } = generalLogic;
  const maxRandomNumber = 100;
  const minRandomNumber = 1;
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < tryNumbers; i += 1) {
    const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    questions.push = randomNumber;
    correctAnswers.push = correctAnswer;
  }
  generalLogic(questions, correctAnswers, description);
}

evenGame();
