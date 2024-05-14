#!/usr/bin/env node
import getRandomNumber from '../../src/rand.js';
import generalLogic from '../../src/index.js';
import { roundsCount, maxRandomNumber, minRandomNumber } from '../../src/GameConfig.js';

const description = 'What number is missing in the progression?';
const amountNums = 10;

// export default function progressiveGame() {
//   const gameData = [];
//   for (let i = 0; i < roundsCount; i += 1) {
//     question = [];
//     const startNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
//     const differenceNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
//     const blankPosition = getRandomNumber(minRandomNumber, amountNums);
//     let correctAnswer;
//     for (let j = 0; j < amountNums; j += 1) {
//       const currentNumber = startNumber + j * differenceNumber;
//       if (j === blankPosition) {
//         question.push(blank);
//         correctAnswer = currentNumber;
//       } else {
//         question.push(currentNumber.toString());
//       }
//     }
//     gameData.push([question.join(' '), correctAnswer.toString()]);
//   }
//   generalLogic(gameData, description);
// }

// progressiveGame();
function genProg(startNum, diffNum, amounNums, blankPos) {
  const progression = [];
  let correctAnswer;

  for (let j = 0; j < amounNums; j += 1) {
    const currentNumber = startNum + j * diffNum;
    if (j === blankPos) {
      progression.push('..');
      correctAnswer = currentNumber;
    } else {
      progression.push(currentNumber.toString());
    }
  }

  return [progression.join(' '), correctAnswer.toString()];
}

export default function progressiveGame() {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const startNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const difNum = getRandomNumber(minRandomNumber, maxRandomNumber);
    const blankPos = getRandomNumber(0, amountNums - 1);
    const [question, correctAnswer] = genProg(startNum, difNum, amountNums, blankPos);
    gameData.push([question, correctAnswer]);
  }
  generalLogic(gameData, description);
}

progressiveGame();
